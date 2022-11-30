// 类方法 Promise.resolve

const promise = Promise.resolve({name: "xionglp"})
// 相当于
const promise2 = new Promise((resolve, reject) => {
  resolve({name: "xionglp"})
})

// 传入一个Promise
const promise3 = Promise.resolve(new Promise((resolve, reject) => {
  resolve("1111111")
}))
promise3.then(res => {
  console.log(res)
})