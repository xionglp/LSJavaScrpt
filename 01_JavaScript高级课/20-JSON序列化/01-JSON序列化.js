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
const objString = JSON.stringify(obj)
console.log(objString);

// 将JSON格式的字符串转成对象
const info = JSON.parse(objString)
console.log(info)