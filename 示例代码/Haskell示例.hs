-- $ ghc -o 示例 Haskell示例.hs
-- $ ./示例
-- $ ghci --version
-- The Glorious Glasgow Haskell Compilation System, version 8.2.1

右折叠 :: Foldable 可折叠 => (甲 -> 乙 -> 乙) -> 乙 -> 可折叠 甲 -> 乙
右折叠 = foldr

乘 :: Num 数值 => 数值 -> 数值 -> 数值
乘 = (*)

阶乘 数 = 右折叠 乘 1 [ 1 .. 数 ]

main :: IO ()
main = print $ 阶乘 5
