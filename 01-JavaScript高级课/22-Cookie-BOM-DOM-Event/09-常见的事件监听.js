const divEl = document.querySelector("#box")

divEl.onclick = function() {
  console.log("div元素被点击++++")
}

divEl.addEventListener("click", ()=> {
  console.log("div元素被点击----")
})