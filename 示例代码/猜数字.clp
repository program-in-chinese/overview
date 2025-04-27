; CLIPS 6.4 可运行

(deftemplate 猜的
   (slot 数))
(deftemplate 想的
   (slot 数))

(defrule 旁白
   =>
   (assert (想的 (数 (random 0 5))))
   (println "想了个数，猜是几？"))

(defrule 猜数
   (declare (salience -5))
   (not (猜的))
   =>
   (print "再猜：")
   (assert (猜的 (数 (string-to-field (readline))))))

(defrule 猜中否
  (想的 (数 ?想的数))
  ?所猜 <- (猜的 (数 ?数))
  =>
  (if (= ?数 ?想的数)
      then
      (print "猜中了！")
      (halt)
      else
      (retract ?所猜)
      )
  )