// Reflect 字面意思 反射
// 提供了很多JavaScript的方法， 类似于Object中操作对象的方法

const obj = {
  name: "xionglp",
  age: 18
}

// receiver的作用： 通过receiver改变里面的this
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log("get-------")
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    console.log("set-------")
    target[key] = newValue

    const result = Reflect.set(target, key, newValue, receiver)
    console.log(result)
  }
})

objProxy.name = "kobe"
console.log(objProxy.name)