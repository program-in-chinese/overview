// $ kotlinc 你好.kt -cp junit.jar:kotlin-test-1.1.51.jar -include-runtime -d 你好.jar
// $ java -jar 你好.jar

// $ kotlinc -version
// info: kotlinc-jvm 1.1.51 (JRE 1.8.0_45-b14)

import org.junit.Assert
import java.util.*
import kotlin.test.assertEquals

typealias 扫描器 = Scanner
typealias 系统 = System

fun main(vararg 参数: String) {
	打印("你好，我可爱吧! 下面请输入数字, 不然原地爆炸")
	val 我是一个变量 = 扫描器(系统.`in`).nextInt()
}

fun 打印(字符串: String) {
	println(字符串)
}

typealias 测试 = org.junit.Test

class 测试类 {
	companion object 静态方法 {
		val 他们应该相等: (Any, Any) -> Unit = Assert::assertEquals
		infix inline fun <reified 类型参数> 类型参数.应该等于(o: 类型参数) = assertEquals(this, o)
	}

	@测试
	fun 测试方法() {
		他们应该相等(1, 1)
		100 应该等于 100
		"我最可爱！"[0] 应该等于 '我'
	}
}
