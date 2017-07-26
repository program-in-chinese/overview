# -*- coding: utf-8 -*-
# 运行: $ ruby 斐波那契.rb

def 斐波那契( n )
  return  n  if ( 0..1 ).include? n
  ( 斐波那契( n - 1 ) + 斐波那契( n - 2 ) )
end
puts 斐波那契( 16 )