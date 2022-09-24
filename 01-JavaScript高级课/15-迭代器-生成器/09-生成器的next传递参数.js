// 实例1
function* bar(init) {
  console.log("开始执行代码")
  const value1 = yield init + "aaa"
  const value2 = yield value1 + "bbb"
  const value3 = yield value2 + "ccc"
}

const generator = bar("xionglp")
const result1 = generator.next()
const result2 = generator.next(result1.value)
const result3 = generator.next(result2.value)

// 实例2
function* foo(initValue) {
  console.log("开始执行代码")

  const value1 = 100 * initValue
  console.log("第一段代码:", value1)
  const n = yield value1

  const value2 = 200 * n
  console.log("第二段代码:", value2)
  const m = yield value2

  const value3 = 300 * m
  console.log("第三段代码:", value3)
  yield value3

  console.log("函数执行结束")
  return "111111"
}

const generatorFoo = foo(5)
console.log(generatorFoo.next())
console.log(generatorFoo.next(20))
console.log(generatorFoo.next(50))



