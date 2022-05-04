function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone(originValue, map = new WeakMap()) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }

  // 判断是否是一个Map类型
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 判断如果是Symbol的value，那么创建一个新的Symbol
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description)
  }

  // 判断如果传入的是函数类型，那么直接使用同一个函数
  if (typeof originValue === "function") {
    return originValue
  }

  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue
  }

  if (map.has(originValue)) {
    return map.get(originValue)
  }

  // 判断传入的是对象还是数组
  const newObject = Array.isArray(originValue) ? [] : {}
  map.set(originValue, newObject)
  for (const key in originValue) {
    // 递归调用，如果传递的不是对象，结束递归返回对应的值
    newObject[key] = deepClone(originValue[key], map) 
  }

  // 对symbol的key进行特殊处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const skey of symbolKeys) {
    newObject[skey] = deepClone(originValue[skey], map)
  }

  return newObject
}

// 测试
let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

const obj = {
  name: "xionglp",
  age: 30,
  friend: {
    name: "corderwhy",
    age: 32,
    address: {
      city: "深圳市"
    }
  },
  hobbies: ["篮球", "足球", "羽毛球"],
  foo: function(m, n) {
    console.log("foo function")
    return 123
  },
  // Symbol
  [s1]: "abc",
  s2: s2,
  // set, map
  set: new Set(["aaa", "bbb", "ccc"]),
  map: new Map([["aaa", "abc"], ["bbb", "cba"]])
}

obj.info = obj

const newObj = deepClone(obj)
console.log(obj === newObj) // false

obj.friend.name = "james"
obj.friend.address.city = "成都市"
console.log(newObj) 
console.log(newObj.s2 === obj.s2)

console.log(newObj.info.info.info)

