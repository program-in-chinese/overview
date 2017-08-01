// $ kotlinc 你好.kt -include-runtime -d 你好.jar
// $ java -jar 你好.jar

// $ kotlinc -version
// info: kotlinc-jvm 1.1.3-2 (JRE 1.8.0_45-b14)

fun main(参数: Array<String>) {
    打印("你好!")
}

fun 打印(字符串: String) {
    println(字符串)
}