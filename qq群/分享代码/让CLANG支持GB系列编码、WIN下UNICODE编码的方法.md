# 让CLANG支持GB系列编码、WIN下UNICODE编码的方法（大约是CLANG3.8或3.9版）

好多年没看了，为了中文编程事业发展而临时抽时间找了下修改处，可能有错误，仅供参考。有人尝试指正后，再考虑公开发布。
CLANG原生支持UTF-8，这里扩展了WIN下常用的编码，希望CLANG后续版本直接支持。现在的CLANG貌似是4.0爆版本号到8.0了？好久没关注了。
最开始修改的clang3.6版跟这里略有不同。用了一些硬编码方式，并且偷懒直接调用了WIN的系统API进行代码转换，最理想应该是自带汉字编码转换库，脱离平台限制
另外，UCS_2编码版忘了有没实现，原理一样，修改简单。
命令行中可设置 fexec-char-set="GBK"  或“ucs_2" ，可能有错，也许设定了GB，请自行尝试一下，应该强制改为输出GBK了，方便WIN控制台程序编码正常显示。
注：试过用DOS命令CPCH 95001,可支持UTF-8，但好象有漏了现象。

[CharInfo.h](file:///D:/Develop/llvmnew/tools/cfe/include/clang/Basic/CharInfo.h) 第47 48行 49行修改为：
LLVM_READNONE static inline bool isgbk(const char * c) {
  return ((unsigned char)* c > 127)&&((unsigned char)c[1] >=0x40);//GBK第二字节从X40开始,GB18030第二字节从0x40开始,第四字节从0X30开始.
  }

[FileSystem.h](file:///D:/Develop/llvmnew/include/llvm/Support/FileSystem.h) 611行修改为：
std::error_code openFileAForRead(const Twine &Name, int &ResultFD);

[VirtualFileSystem.h](file:///D:/Develop/llvmnew/tools/cfe/include/clang/Basic/VirtualFileSystem.h) 192 193行：
 virtual llvm::ErrorOr<std::unique_ptr<File>>
  openFileAForRead(const Twine &Path) = 0;
237 238行：
 llvm::ErrorOr<std::unique_ptr<File>>
  openFileAForRead(const Twine &Path) override;

[ConvertUTF.h](file:///D:/Develop/llvmnew/include/llvm/Support/ConvertUTF.h) 253行开始插入：
bool ConvertUTF8toGBK( llvm::StringRef Source,char *&ResultPtr, const UTF8 *&ErrorPtr);
bool ConvertUTF8toGBK (const char *sourceStart, const char* sourceEnd,char *targetStart, char * targetEnd, ConversionFlags flags);
bool convertUTF16ToUTF8String(ArrayRef<char> SrcBytes, std::string &Out);
std::error_code UTF8ToUTF16(llvm::StringRef utf8,llvm::SmallVectorImpl<wchar_t> &utf16);
static																																	//
std::error_code UTF16ToCodePage(unsigned codepage, const wchar_t *utf16,size_t utf16_len,llvm::SmallVectorImpl<char> &utf8);			//
static std::error_code windows_error(unsigned long E);	

[ConvertUTFWrapper.cpp](file:///D:/Develop/llvmnew/lib/Support/ConvertUTFWrapper.cpp) 14行插入：

#include "Windows/WindowsSupport.h"    //实现编码转换             //
//#include "Windows/path.inc"   //实现编码转换             //
#include "llvm/Support/WindowsError.h"

22行插入：

#define CP_GBK 936
//--------[ymdadd]-----           先强行设定输出为GB码                           //
bool isOutcharsetGB=true;                                   //
                                                             //
                                                             
[ConvertUTFWrapper.cpp](file:///D:/Develop/llvmnew/lib/Support/ConvertUTFWrapper.cpp) 40行插入：
//理应先检测目标编码 参考: const TargetRegisterInfo *TRI = &getRegisterInfo();		//
									   //	uint16_t DestEncoding = TRI->getEncodingValue(DestReg);							//
									   //	 uint16_t SrcEncoding = TRI->getEncodingValue(SrcReg);							//																		//
									   //if (Encoding == WEM_UTF8) {
									   // OS << Contents;																	//
									   // } else if (Encoding == WEM_CurrentCodePage) {
									   //


									   const UTF8 *sourceStart = (const UTF8*)Source.data();
									   SmallVector<wchar_t,1> ArgsUTF16;//
									   llvm::SmallVectorImpl<wchar_t> &ArgsUTF16Impl=ArgsUTF16;													//
									   SmallVector<char, 1> ArgsCurCP;														//
									   SmallVectorImpl<char> &ArgsCPGBK=ArgsCurCP;
									   if(UTF8ToUTF16(Source, ArgsUTF16Impl)) 							//
										   result = sourceIllegal;
									   //ErrorPtr = Pos;
									   // if ((llvm::sys::windows::UTF16ToCurCP(ArgsUTF16.data(), ArgsUTF16.size(), ArgsCurCP)))

									   if(!UTF16ToCodePage(CP_GBK, ArgsUTF16Impl.data(), ArgsUTF16Impl.size(), ArgsCPGBK))
									   {

										   memcpy(ResultPtr, ArgsCPGBK.data(), ArgsCPGBK.size());
										   ResultPtr += Source.size();
										  // return result == conversionOK;
									   }

[ConvertUTFWrapper.cpp](file:///D:/Develop/llvmnew/lib/Support/ConvertUTFWrapper.cpp)175行插入：
bool ConvertUTF8toGBK( llvm::StringRef Source,char *&ResultPtr, const UTF8 *&ErrorPtr) {
	 
	   ConversionResult result = conversionOK;
	   // Copy the character span over.
	
	 const UTF8 *Pos = reinterpret_cast<const UTF8*>(Source.begin());
if (!isLegalUTF8String(&Pos, reinterpret_cast<const UTF8*>(Source.end()))) {
   result = sourceIllegal;
	  ErrorPtr = Pos;
	 } else {
	  									   //--------[ymd add]-------------------------------------------------------------------  //
		   //理应先检测目标编码 参考: const TargetRegisterInfo *TRI = &getRegisterInfo();		//
		   //	uint16_t DestEncoding = TRI->getEncodingValue(DestReg);							//
		   //	 uint16_t SrcEncoding = TRI->getEncodingValue(SrcReg);							//																		//
		   //if (Encoding == WEM_UTF8) {
		   // OS << Contents;																	//
		   // } else if (Encoding == WEM_CurrentCodePage) {
		   //


		   const UTF8 *sourceStart = (const UTF8*)Source.data();
		   SmallVector<wchar_t,1> ArgsUTF16;//
		   llvm::SmallVectorImpl<wchar_t> &ArgsUTF16Impl=ArgsUTF16;													//
		   SmallVector<char, 1> ArgsCurCP;														//
		   SmallVectorImpl<char> &ArgsCPGBK=ArgsCurCP;
		   if(UTF8ToUTF16(Source, ArgsUTF16Impl)) 							//
			   result = sourceIllegal;
		   //ErrorPtr = Pos;
		   // if ((llvm::sys::windows::UTF16ToCurCP(ArgsUTF16.data(), ArgsUTF16.size(), ArgsCurCP)))

		   if(!UTF16ToCodePage(CP_GBK, ArgsUTF16Impl.data(), ArgsUTF16Impl.size(), ArgsCPGBK))
		   {

			   memcpy(ResultPtr, ArgsCPGBK.data(), ArgsCPGBK.size());
			  
			//   return result == conversionOK;
		   }
		 //  else result == sourceIllegal;
  }
return result == sourceIllegal;
}
bool ConvertUTF8toGBK (const char *sourceStart, const char* sourceEnd,char *targetStart, char * targetEnd, ConversionFlags flags)
{
	    int sourcelen=sourceEnd-sourceStart;
		wchar_t  buff[512]={0};

	   int utf16len = ::MultiByteToWideChar(CP_UTF8, MB_ERR_INVALID_CHARS, sourceStart,
		   sourcelen, buff, 0);

	   if (utf16len != 0)
	   {

		   utf16len = ::MultiByteToWideChar(CP_UTF8, MB_ERR_INVALID_CHARS, sourceStart,
			   sourcelen, buff, utf16len);

		   if (utf16len != 0)
		   {

			   int targetlen  = ::WideCharToMultiByte(936, 0, buff, utf16len, targetStart,
				   0, NULL, NULL);

			   if (targetlen == 0)
				   return false;

			   targetlen = ::WideCharToMultiByte(936, 0, buff, utf16len, targetStart,
				   targetlen, NULL, NULL);

			   if (targetlen != 0)
			   {
				   //   memcpy(targetStart, ArgsCPGBK.data(), ArgsCPGBK.size());
				   //  memset(targetStart+ArgsCPGBK.size()+1,0,1);
				   return true;
			   }
		   }
	   }

return false;





}
std::error_code UTF8ToUTF16(llvm::StringRef utf8,
                            llvm::SmallVectorImpl<wchar_t> &utf16) {
  if (!utf8.empty()) {
    int len = ::MultiByteToWideChar(CP_UTF8, MB_ERR_INVALID_CHARS, utf8.begin(),
                                    utf8.size(), utf16.begin(), 0);

    if (len == 0)
      return windows_error(::GetLastError());

    utf16.reserve(len + 1);
    utf16.set_size(len);

    len = ::MultiByteToWideChar(CP_UTF8, MB_ERR_INVALID_CHARS, utf8.begin(),
                                utf8.size(), utf16.begin(), utf16.size());

    if (len == 0)
      return windows_error(::GetLastError());
  }

  // Make utf16 null terminated.
  utf16.push_back(0);
  utf16.pop_back();

  return std::error_code();
}

static																								//
std::error_code UTF16ToCodePage(unsigned codepage, const wchar_t *utf16,							//
                                size_t utf16_len,													//
                                llvm::SmallVectorImpl<char> &utf8) {
  if (utf16_len) {
    // Get length.
    int len = ::WideCharToMultiByte(codepage, 0, utf16, utf16_len, utf8.begin(),
                                    0, NULL, NULL);

    if (len == 0)
      return windows_error(::GetLastError());
	
    utf8.reserve(len);
    utf8.set_size(len);

    // Now do the actual conversion.
    len = ::WideCharToMultiByte(codepage, 0, utf16, utf16_len, utf8.data(),
                                utf8.size(), NULL, NULL);

    if (len == 0)
     return windows_error(::GetLastError());
	
  }

  // Make utf8 null terminated.
  utf8.push_back(0);
  utf8.pop_back();

  return std::error_code();
}

static std::error_code windows_error(unsigned long E) {
  return mapWindowsError(E);																	   //
}						
[Path.inc](file:///D:/Develop/llvmnew/lib/Support/Windows/Path.inc)674行插入：

//------- 增加的函数

std::error_code openFileAForRead(const Twine &Name, int &ResultFD) {
  SmallString<128> PathStorage;
  SmallVector<char, 128> PathAnsi;

  //if (error_code EC = UTF8ToUTF16(Name.toStringRef(PathStorage),
  //                                PathUTF16))
    //return EC;
	
  StringRef Path = Name.toNullTerminatedStringRef(PathStorage);
  //HANDLE H = ::CreateFileW(PathUTF16.begin(), GENERIC_READ,
  //                         FILE_SHARE_READ | FILE_SHARE_WRITE, NULL,
  //                         OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);
  HANDLE H = ::CreateFileA(Path.begin(), GENERIC_READ,
                          FILE_SHARE_READ | FILE_SHARE_WRITE, NULL,
                          OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);
    if (H == INVALID_HANDLE_VALUE) {
    DWORD LastError = ::GetLastError();
    std::error_code EC = windows_error(LastError);
    // Provide a better error message when trying to open directories.
    // This only runs if we failed to open the file, so there is probably
    // no performances issues.
    if (LastError != ERROR_ACCESS_DENIED)
      return EC;
    if (is_directory(Name))
      return make_error_code(errc::is_a_directory);
    return EC;
  }

  int FD = ::_open_osfhandle(intptr_t(H), 0);
  if (FD == -1) {
    ::CloseHandle(H);
    return windows_error(ERROR_INVALID_HANDLE);
  }

  ResultFD = FD;
  return std::error_code();
}

[driver.cpp](file:///D:/Develop/llvmnew/tools/cfe/tools/driver/driver.cpp) 52行插入：
#include <Windows.h>   
385行调试用临时增加
  //-------------------      、、先直接用WIN系统的API
for(int i=0;i<argc_;i++)
{
 if(StringRef(argv_[i]).find("-wait-debug")!=StringRef::npos)
	  ::MessageBox(0,"请附加调试器后关闭此窗口.","",0);
}

[FileSystemStatCache.cpp](file:///D:/Develop/llvmnew/tools/cfe/lib/Basic/FileSystemStatCache.cpp)83行修改为：
	auto OwnedFile = FS.openFileAForRead(Path);
[VirtualFileSystem.cpp](file:///D:/Develop/llvmnew/tools/cfe/lib/Basic/VirtualFileSystem.cpp) 155行增加：
  ErrorOr<std::unique_ptr<File>> openFileAForRead(const Twine &Path) override;

180行增加：
//----------ymd:
ErrorOr<std::unique_ptr<File>>
RealFileSystem::openFileAForRead(const Twine &Name) {
  int FD;
  if (std::error_code EC = sys::fs::openFileAForRead(Name, FD))
    return EC;
  std::unique_ptr<File> Result(new RealFile(FD));
  Result->setName(Name.str());
  return std::move(Result);
}
267行增加：
ErrorOr<std::unique_ptr<File>>
OverlayFileSystem::openFileAForRead(const llvm::Twine &Path) {
  // FIXME: handle symlinks that cross file systems
  for (iterator I = overlays_begin(), E = overlays_end(); I != E; ++I) {
    auto Result = (*I)->openFileAForRead(Path);
    if (Result || Result.getError() != llvm::errc::no_such_file_or_directory)
      return Result;
  }
  return make_error_code(llvm::errc::no_such_file_or_directory);
}

536行增加：
  ErrorOr<std::unique_ptr<File>> openFileAForRead(const Twine &Path) override;
1006行增加：

ErrorOr<std::unique_ptr<File>> VFSFromYAML::openFileAForRead(const Twine &Path) {
  ErrorOr<Entry *> E = lookupPath(Path);
  if (!E)
    return E.getError();

  FileEntry *F = dyn_cast<FileEntry>(*E);
  if (!F) // FIXME: errc::not_a_file?
    return make_error_code(llvm::errc::invalid_argument);

  auto Result = ExternalFS->openFileAForRead(F->getExternalContentsPath());
  if (!Result)
    return Result;

  if (!F->useExternalName(UseExternalNames))
    (*Result)->setName(Path.str());

  return Result;
}
[Tools.cpp](file:///D:/Develop/llvmnew/tools/cfe/lib/Driver/Tools.cpp) 2489行增加：
if (Args.hasArg(options::OPT_wait_debug))
        CmdArgs.push_back("-wait-debug");
[Lexer.cpp](file:///D:/Develop/llvmnew/tools/cfe/lib/Lex/Lexer.cpp) 1534行修改：


	//else if (!isASCII(C)/* && tryConsumeIdentifierGBKChar(CurPtr)) */){
/*				const char *GBKPtr = CurPtr;
		while(GBKPtr<BufferEnd)
		{
			if((unsigned char)*GBKPtr>127&&(unsigned char)*(GBKPtr+1)>=0x40)//  GBK第二字节从X40开始,GB18030第二字节从0x40开始,第四字节从0X30开始.
			{
				GBKPtr=GBKPtr+2;

			}
			else
				break;

		}
		CurPtr =GBKPtr;
		C = getCharAndSize(CurPtr, Size);
		continue;
				

	}

	*/
3610行注释：
/*	--CurPtr;
	if(isgbk(CurPtr))
		{
			//C = *CurPtr+2;//取双字节.
	 		//CurPtr=CurPtr+2;
			MIOpt.ReadToken();
			return LexIdentifier(Result, CurPtr);
			
		}
		*/

[Preprocessor.cpp](file:///D:/Develop/llvmnew/tools/cfe/lib/Lex/Preprocessor.cpp)  438行修改：
int len=Tok.getLength();
  bool hasNonASCII=false;
  const char * PtrSource=Tok.getLiteralData();
  unsigned targetLen=Tok.getLength() + 1;

  for(int i=0;i<=len;i++)
  {
	  hasNonASCII=!isASCII((char)*(PtrSource+i));
	  if(hasNonASCII)
		  break;
  }
  if(hasNonASCII)
  {
	  SmallString<32> Target;
	  Target.resize(targetLen);
	  char *ResultPtr =Buffer.data();
	  ConversionFlags flags=strictConversion;

	  bool success =llvm::ConvertUTF8toGBK (PtrSource,PtrSource+targetLen-1,
		  ResultPtr, ResultPtr+targetLen, flags);
	  if(success)
	  {
		  StringRef result(ResultPtr,targetLen);
		  if(result.startswith("\""))
		  {
			  int pos=result.rfind('"');
			  if(pos>0)//0估计是第一个,负数估计是未找到
			  {
				  result=result.drop_back(result.size()-pos-1);
			//	  std::string tempstr =result.str();
			//	 tempstr.append("\0");
			//	 result=tempstr;
			  }
		  }
		  if(result.startswith("<"))
		  {
			  int pos=result.rfind('>');
			  if(pos>0)
			  {
				  result=result.drop_back(result.size()-pos-1);
			//	  std::string tempstr =result.str();
			//	 tempstr.append("\0");
			//	 result=tempstr;
			  }
		  }
		   return result;
	  }

  }    
  