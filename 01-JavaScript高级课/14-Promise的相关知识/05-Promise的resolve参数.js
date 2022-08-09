// resolve参数
// 1. 普通的值或者对象 pending -> fulfilled
// 2. 传入一个Promise, 那么当前的Promise的状态会由传入的Promise来决定，相当于将状态进行了移交
// 3. 传入一个对象，并且这个对象有事项then方法， 那么也会执行该then方法，并且有该then方法决定后续状态   

// 1. 传入Promise的特殊情况
const newPromise = new Promise((resolve, reject) => {
  resolve("aaaaaa")
})

new Promise((resolve, reject) => {
  // resolve("success message")
  resolve(newPromise)
}).then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

// 2. 传入一个对象，并且这个对象有then方法
new Promise((resolve, reject) => {
  const obj = {
    then: function(resolve, reject) {
      // resolve("resolve message")
      reject("reject message")
    }
  }
  resolve(obj)
}).then((res) => {
  console.log("res: ", res)
}, err => {
  console.log(err)
})

