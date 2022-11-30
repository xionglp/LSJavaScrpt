function* foo() {
  console.log("开始执行代码")
  const value1 = 100
  console.log("第一段代码：", value1)
  yield

  const value2 = 200
  console.log("第二段代码：", value2)
  yield

  const value3 = 300
  console.log("第三段代码：", value3)
  yield

  console.log("结束执行代码")
}

// 调用生成器函数，返回一个生成器对象
const generator = foo()

// 执行函数内第一段代码
generator.next()
console.log("-----111-----")
generator.next()
console.log("-----222------")
generator.next()
generator.next()
