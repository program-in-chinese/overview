{-# LANGUAGE UnicodeSyntax #-}

-- $ ghc -o 示例 Haskell示例.hs
-- $ ./示例
-- $ ghci --version
-- The Glorious Glasgow Haskell Compilation System, version 8.2.1

-- | 折叠
--   同理可以有左折叠和从 1 开始的折叠
--   只是没写，道理都一样
右折叠 :: Foldable 可折叠 => (甲 -> 乙 -> 乙) -> 乙 -> 可折叠 甲 -> 乙
右折叠 = foldr

-- | 乘法
乘 :: Num 数值 => 数值 -> 数值 -> 数值
乘 = (*)

-- | 阶乘
阶乘 :: Int -> Int
阶乘 数 = 右折叠 乘 1 [ 1 .. 数 ]

main :: IO ()
main = do
  let 输出 = print
  in 输出 $ 阶乘 5
--


-- 可以开个编译器扩展
-- 符号就可以用全角的完整符号

-- 比如

-- a -> a

-- 扩展后就可以是

-- a → a

-- 不知道对中文有没有帮助

-- 我觉得应该可以
