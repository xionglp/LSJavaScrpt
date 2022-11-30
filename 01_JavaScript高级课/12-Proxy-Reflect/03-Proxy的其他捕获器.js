const obj = {
  name: "xionglp",
  age: 18
}

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
  },
  has: function(target, key) {
    console.log(`has捕获器`, key)
    return key in target
  },
  deleteProperty: function(target, key) {
    console.log(`deltet捕获器`)
    delete target[key]
  }
})

// in操作符
console.log("name" in objProxy)

//delete操作
delete objProxy.name
console.log(obj)
