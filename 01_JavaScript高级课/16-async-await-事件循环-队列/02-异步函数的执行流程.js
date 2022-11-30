async function foo() {
  console.log("foo function start---")

  console.log("内部执行代码111")
  console.log("内部执行代码111")
  console.log("内部执行代码111")

  console.log("foo function end")
}

console.log("script start")
foo()
console.log("script end")

