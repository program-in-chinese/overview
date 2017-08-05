// tested in ideone.com, Scala

object Main extends App {
	def 斐波那契(数值: Int): Int = {
	    if(数值 <= 2) 1
	    else 斐波那契(数值 - 1) + 斐波那契(数值 - 2)
	}
	print(斐波那契(16))
}
