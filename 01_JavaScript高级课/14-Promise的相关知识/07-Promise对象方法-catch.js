
const promise = new Promise((resolve, reject) => {
  reject("reject message")
})

// promise.then(undefined, err => {
//   console.log(err)
// })

promise.then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
  return "catch value"
}).then(res => {
  console.log("res result:", res)
}).catch(err => {
  console.log("err result:", err)
})

