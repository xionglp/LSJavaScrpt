// 自己封装回调函数
function requestData(url, successCallback, errCallback) {
  // 模拟网络请求
  setTimeout(() => {
    if (url === "kingdom") {
      const res = {
        code: "0",
        data: ["aaa", "bbb", "ccc"]
      }
      successCallback(res)
    } else {
      const err = "请求失败， url错误"
      errCallback({err});
    }
  }, 3000)
}

requestData("kingdom", (res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})