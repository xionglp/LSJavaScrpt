function* foo() {
  console.log("代码开始执行~")

  const value1 = 100
  try {
    yield value1
  } catch (error) {
    console.log("捕获到异常情况: ", error)
    yield "error message"
  }

  console.log("第二段代码执行")
  const value2 = 200
  yield value2

  console.log("代码执行结束~")
}

const generator = foo()
const result = generator.next()
console.log(result)
generator.throw("err")
console.log(generator.next())
