const obj = {
  name: "why",
  age: 18,
  friends: {
    name: "kobe"
  },
  hobbies: ["篮球", "足球"],
  foo: function() {
    console.log("foo function")
  }
}

//将obj对象的内容放到info变量中
const info = obj;
info.name = "xionglp"
console.log(obj.name) // xionglp

// 浅拷贝
const info2 = { ...obj } // 单独的一块内存地址 （info2指向一个新的一个对象内存地址）
obj.age = 100
console.log(info2.age) // 18

obj.friends.name = "james"
console.log(info2.friends.name) // james