function* foo() {
  console.log("开始执行代码")
  const value1 = 100
  console.log("第一段代码：", value1)
  yield value1

  const value2 = 200
  console.log("第二段代码：", value2)
  yield value2

  const value3 = 300
  console.log("第三段代码：", value3)
  yield value3

  console.log("结束执行代码")
}

// 调用生成器函数，返回一个生成器对象
// generator本质上是一个特殊的iterator
const generator = foo()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())


