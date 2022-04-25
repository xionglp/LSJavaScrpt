// const promise = Promise.reject("reject message")
// // 相当于
// const promise2 = Promise.reject((resolve, reject) => {
//   reject("reject message")
// })

// 无论传入什么值都是一样的
const promise3 = Promise.reject(new Promise((resolve, reject) => {
  reject("reject message222")
}))

promise3.then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
})