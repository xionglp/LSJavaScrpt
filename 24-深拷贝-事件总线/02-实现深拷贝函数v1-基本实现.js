function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType ==="object" || valueType === "function")
}

function deepClone(originValue) {
  if (!isObject(originValue)) {
    return originValue
  }

  const newObject = {}
  for (const key in originValue) {
    // 递归调用，如果传递的不是对象，结束递归返回对应的值
    newObject[key] = deepClone(originValue[key]) 
  }
  return newObject
}

// 测试
const obj = {
  name: "xionglp",
  age: 30,
  friend: {
    name: "corderwhy",
    age: 32,
    address: {
      city: "深圳市"
    }
  }
}

const newObj = deepClone(obj)
console.log(obj === newObj) // false

obj.friend.name = "james"
obj.friend.address.city = "成都市"
console.log(newObj) 

