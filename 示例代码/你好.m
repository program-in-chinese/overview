// 在Xcode Version 8.3.3中编译运行成功

#import <Foundation/Foundation.h>

int 阶乘 (int 数) {
    if(数 == 0) {
        return 1;
    } else {
        return 数 * 阶乘(数 - 1);
    }
}

int main(int argc, const char * argv[]) {
    int 数 = 4;
    @autoreleasepool {
        // insert code here...
        NSLog(@"%i的阶乘: %i", 数, 阶乘(数));
    }
    return 0;
}
