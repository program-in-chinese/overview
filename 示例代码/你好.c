/* 在mac下测试
 * $ cc 你好.c
   $ ./a.out 
   $ cc --version
Apple LLVM version 6.1.0 (clang-602.0.53) (based on LLVM 3.6.0svn)
Target: x86_64-apple-darwin14.5.0
Thread model: posix*/

#include <stdio.h>
void 问好();

int main() {
  问好();
}

void 问好() {
  printf("你好\n");
}