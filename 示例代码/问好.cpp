/** 在mac下测试:
 * $ g++ -o 问好 问好.cpp
 * $ ./问好
 * $ g++ --version
Configured with: --prefix=/Applications/Xcode.app/Contents/Developer/usr --with-gxx-include-dir=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.10.sdk/usr/include/c++/4.2.1
Apple LLVM version 6.1.0 (clang-602.0.53) (based on LLVM 3.6.0svn)
Target: x86_64-apple-darwin14.5.0
Thread model: posix*/

#include<iostream>
using namespace std;
void 问好();

int main()
{
   问好();
   return 0;
}

void 问好() {
    cout<<"你好!"<<endl;
}