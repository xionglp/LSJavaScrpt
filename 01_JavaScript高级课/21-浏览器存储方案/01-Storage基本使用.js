// 浏览器存储方案
const loginBtn = document.querySelector("button")
loginBtn.onclick = function() {
  localStorage.setItem("name", "localStorage")
  sessionStorage.setItem("age", 100)
}