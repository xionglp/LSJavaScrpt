const obj = {
  name: "xionglp",
  age: 18
}

// 利用proxy监听对象的操作
const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function(target, key) {
    console.log(`监听到对象${key}属性被访问了`, target)
    return target[key]
  },
  // 设置值时的捕获器
  set: function(target, key, newValue) {
    console.log(`监听到对象${key}属性被设置了值`, target)
    target[key] = newValue
  }
})

console.log(objProxy.name)
console.log(objProxy.age)

objProxy.name = "kobe"
objProxy.age = 35

console.log(obj.name)
console.log(obj.age)

