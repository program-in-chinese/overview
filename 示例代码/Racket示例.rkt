#lang racket

;; 測試於Archlinux,Racket7.2。安裝：`sudo pacman -S racket`

(define-syntax-rule (定義 名 物) (define 名 物))

(定義 顯示 displayln)
(顯示 "你好，世界")
