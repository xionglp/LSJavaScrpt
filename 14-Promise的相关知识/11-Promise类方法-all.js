// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve message-1")
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("resolve message-2")
    reject("reject message-2")
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve message-3")
  }, 3000);
})

// 需求: 所有的Promise都变成fulfilled时, 再拿到结果
// 意外: 在拿到所有结果之前, 有一个promise变成了rejected, 那么整个promise是rejected
Promise.all([p1, p2, p3, "aaaaa"]).then(res => {
  console.log(res)
}, err => {
  console.log(err)
})