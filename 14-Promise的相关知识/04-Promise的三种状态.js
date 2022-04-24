new Promise((resolve, reject) => {
  // pending: 待定状态
  console.log("----------")
  resolve() // 处于fulfilled状态（已敲定、已兑现）
  reject()  // 处于rejected状态（已拒绝状态）
  console.log("++++++++++")
}).then((res) => {
  console.log("res: ", res)
}, (err) => {
  console.log("err: ", err)
})