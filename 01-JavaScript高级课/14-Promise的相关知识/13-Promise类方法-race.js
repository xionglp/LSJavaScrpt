// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111)
  }, 3000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222)
  }, 500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333)
  }, 1000);
})

// race 竞赛， 竞技
// 只要有一个Promise变成fulfilled,那么就结束
Promise.race([p1, p2, p3]).then(res => {
  console.log(res)
}, err => {
  console.log(err)
})


// 从这里开始
// 茶轴和红轴的机械键盘不错
// 青轴声音太大， 黑轴还没有用过