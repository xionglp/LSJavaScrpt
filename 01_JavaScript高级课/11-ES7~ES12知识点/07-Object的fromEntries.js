const obj = {
  name: "xionglp",
  age: 18,
  height: 1.99
}

const entries = Object.entries(obj)
console.log(entries)

// 将entries数据转回到字典数据
const newObj = Object.fromEntries(entries)
console.log(newObj)

//应用场景
const queryString = "name=why&age=18&height=1.88"
const queryParams = new URLSearchParams(queryString)
for (const param of queryParams) {
  console.log(param)
}

const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)