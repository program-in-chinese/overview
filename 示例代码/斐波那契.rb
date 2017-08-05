# -*- coding: utf-8 -*-
# 运行: $ ruby 斐波那契.rb

def 斐波那契(数值)
  return 数值 if 数值 < 2
  斐波那契(数值 - 1) + 斐波那契(数值 - 2)
end

def 调试输出(值)
  p 值
end

def 输出(值)
  print 值
end

输出 斐波那契(16)
