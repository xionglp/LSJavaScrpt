function foo(type) {
  if (type === 0) {
    throw new Error("type类型不能为0")
  }
}

function bar() {
  // foo(0)
  try {
    foo(0)
  } catch (error) {
    console.log("error:", error.message)
    // 抛出异常信息， alert（）
  } finally {
    console.log("finally 代码执行")
  }
}

function test() {
  bar()
}

test()

console.log("后续代码继续执行")