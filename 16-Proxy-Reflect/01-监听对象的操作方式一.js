const obj = {
  name: "xionglp",
  age: 18
}

Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get: function() {
      console.log(`监听到obj对象的${key}属性被访问了`)
      return value
    },
    set: function(newValue) {
      console.log(`监听到obj对象的${key}属性被设置值了`)
      value = newValue
    }
  })
})

obj.name = "kobe"
obj.age = 19
console.log(obj.name)
console.log(obj.age)
