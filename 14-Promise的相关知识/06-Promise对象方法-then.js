// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

const promise = new Promise((resolve, reject) => {
  resolve("xionglp")
})

// 1. 同一个Promise可以被多次调用then方法
// promise.then(res => {
//   console.log("res1:", res)
// })

// promise.then(res => {
//   console.log("res2:", res)
// })

// promise.then(res => {
//   console.log("res3:", res)
// })

// 2. then方法传入的 回调函数 可以有返回值
//  then方法本身也是有返回值的， 它返回的是Promise

// 1> 如果返回的是普通的值， 那么这个值被作为一个新的Promise的resolve值
promise.then(res => {
  return "aaa"
}).then(res => {
  console.log("res", res)
  return "bbb"
})

// 2> 返回的是Promise
promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("12345")
    }, 1000);
  })
}).then(res => {
  console.log("res1:", res)
})

// 3> 返回的是一个对象，并且实现了then方法
promise.then(res => {
  return {
    then: function(resolve) {
      resolve("cccccc")
    }
  }
}).then(res => {
  console.log("res3:", res)
})