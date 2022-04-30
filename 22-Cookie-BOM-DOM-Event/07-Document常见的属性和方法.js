console.log(document.body)
console.log(document.title)

document.title = "hello world"

console.log(window.location === document.location) // true

// 创建元素
const imageEl = document.createElement("image")

// 获取元素
const divEl1 = document.getElementById("box")
const divEl2 = document.getElementsByName("title")

const divEl3 = document.querySelector("#box") // 通过选择器