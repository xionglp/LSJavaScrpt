// 自己封装回调函数
function requestData(url) {
  // 模拟网络请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "kingdom") {
        const res = {
          code: "0",
          data: ["aaa", "bbb", "ccc"]
        }
        resolve(res)
      } else {
        const err = "请求失败， url错误"
        reject({err})
      }
    }, 2000);
  })
}

const promise = requestData("kingdom")
promise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})