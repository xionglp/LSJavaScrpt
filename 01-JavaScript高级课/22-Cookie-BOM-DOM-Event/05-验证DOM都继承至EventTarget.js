document.addEventListener("click", () => {
  // console.log("document被点击")
})

const divEl = document.querySelector("#box")
const spanEl = document.querySelector(".conent")

divEl.addEventListener("click", () => {
  console.log("div被点击")
})

// spanEl.addEventListener("click", () => {
//   console.log("span被点击")
// })