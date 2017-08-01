-- $ ghc -o 示例 Haskell示例.hs
-- $ ./示例
-- $ ghc --version
-- The Glorious Glasgow Haskell Compilation System, version 8.0.2

阶乘 0 = 1
阶乘 数 = 数 * 阶乘 (数-1)
 
main = print (阶乘 5)