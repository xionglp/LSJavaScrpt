// 常见属性
console.log(window.screenX)
console.log(window.screenY)

// 监听滚动事件
window.addEventListener("scroll", () => {
  console.log(window.scrollX, window.scrollY)
})

// 常见的方法
const scrollBtn = document.querySelector("#scroll")
scrollBtn.onclick = function() {
  // window.scrollTo({
  //   top: 1000
  // })

  window.open("http://www.baidu.com", "_self")
}

// 常见的时间
window.onload = function() {
  console.log("window窗口加载完毕")
}

window.onfocus = function() {
  console.log("window窗口获取焦点")
}

window.onblur = function() {
  console.log("window窗口失去焦点")
}