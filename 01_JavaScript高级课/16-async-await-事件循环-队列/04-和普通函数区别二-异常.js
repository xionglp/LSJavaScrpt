async function foo() {
  console.log("foo function start")
  console.log("中间代码")

  throw new Error("err message")

  console.log("foo function end")
}

foo().catch((err) => {
  console.log("xionglp err: ", err)

})

console.log("后续代码...")