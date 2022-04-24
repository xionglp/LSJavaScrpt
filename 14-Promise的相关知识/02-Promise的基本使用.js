function foo() {
  return new Promise((resolve, reject) => {
    // resolve("success message")
    reject("failture message")
  })
}

// executor: 执行者
// resolve: 解决
// reject: 拒绝

const fooPromise = foo()
// then方法传入的俩个回调函数：
// 1. 第一个回调函数会在Promise执行resolve函数时，被回调
// 2. 第二个回调函数会在Promise执行reject函数时， 被回调
fooPromise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
  console.log("-----------")
})