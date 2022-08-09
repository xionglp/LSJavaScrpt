let reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
}

const obj = {
  name: "xionglp",
  age: 18
}

watchFn(function() {
  const newName = obj.name
  console.log(obj.name)
})

watchFn(function() {
  console.log(obj.name, "demo function ----")
})

function bar() {
  console.log("bar函数不需要响应式")
}

obj.name = "kobe"
reactiveFns.forEach(fn => {
  fn()
})

