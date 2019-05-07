#lang racket
(define-syntax-rule (定義 名 物) (define 名 物))

(定義 顯示 displayln)
(顯示 "你好，世界")
