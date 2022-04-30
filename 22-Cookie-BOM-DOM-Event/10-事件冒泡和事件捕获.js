const spanEl = document.querySelector(".content")
const divEl = document.querySelector("#box")

// 事件冒泡： 从上往下传递
spanEl.addEventListener("click", () => {
  console.log("事件冒泡:span元素被点击了")
})

divEl.addEventListener("click", () => {
  console.log("事件冒泡:div元素被点击了")
})

document.body.addEventListener("click", () => {
  console.log("事件冒泡:body元素被点击了")
})

// 事件捕获： 从下往上传递
spanEl.addEventListener("click", (event) => {
  console.log("事件捕获: span元素被点击")
  event.stopPropagation()
}, true)

divEl.addEventListener("click", () => {
  console.log("事件捕获: div元素被点击")
}, true)

document.body.addEventListener("click", () => {
  console.log("事件捕获: body被点击")
}, true)


