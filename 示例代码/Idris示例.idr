-- 測試於Archlinux, Idris 1.3.1-54。安裝：`sudo pacman -S idris`

module 模塊

類型 : Type
類型 = Type

字串 : 類型
字串 = String

可顯示 : 類型 -> 類型
可顯示 = Show

顯示 : 可顯示 t => t -> 字串
顯示 = show

甲 : 字串
甲 = 顯示 (1+1)
