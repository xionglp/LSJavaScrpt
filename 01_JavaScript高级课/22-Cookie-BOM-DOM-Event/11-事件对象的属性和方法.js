const divEl = document.querySelector("#box")

divEl.addEventListener("click", (event) => {
  console.log(event.type)
  console.log(event.target)
  console.log(event.currentTarget)
  console.log(event.offsetX, event.offsetY)
})

