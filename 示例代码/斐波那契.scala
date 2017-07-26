// tested in ideone.com, Scala

object Main extends App {
	def 斐波那契(n:Int):Int={
	    if(n<=2) 1
	    else 斐波那契(n-1)+斐波那契(n-2)
	}
	print(斐波那契(16))
}