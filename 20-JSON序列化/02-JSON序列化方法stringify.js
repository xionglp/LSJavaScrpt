// json序列化

const obj = {
  name: "why",
  age: 18,
  friends: {
    name: "kobe"
  },
  hobbies: ["篮球", "足球"]
}

// 将obj对象转成JSON格式的字符串
const jsonString1 = JSON.stringify(obj)
console.log(jsonString1);

// stringify方法的第二个参数replacer 传入一个数组，设定哪些需要转换
const jsonString2 = JSON.stringify(obj, ["name", "age"])
console.log(jsonString2)

// 传入一个回调函数
const jsonString3 = JSON.stringify(obj, (key, value) => {
  if (key === "age") {
    value = 100
  }
  return value
})
console.log(jsonString3)

// stringify第三个参数 space 
const jsonString4 = JSON.stringify(obj, null, 2)
console.log(jsonString4)