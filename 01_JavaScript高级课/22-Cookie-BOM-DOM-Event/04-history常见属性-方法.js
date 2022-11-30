const jumpBtn = document.querySelector("#jump")

jumpBtn.onclick = function() {
  // location.href = "./demo.html"

  // 不刷新网页
  // history.pushState({name: "xionglp"}, "", "./demo") 
  history.replaceState({name: "xionglp"}, "", "./demo")
}