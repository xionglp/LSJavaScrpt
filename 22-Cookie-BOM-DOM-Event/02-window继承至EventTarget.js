window.addEventListener("corderwhy", () => {
  console.log("监听到corderwhy事件")
})

window.dispatchEvent(new Event("corderwhy"))