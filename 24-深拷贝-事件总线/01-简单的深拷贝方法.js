const obj = {
  name: "xionglp",
  age: 18,
  friend: {
    name: "kobe"
  },
  foo: function() {
    console.log("foo function")
  }
}

// 利用JSON.parse(JSON.stringify()) 实现简单的深拷贝
// 这种方式如果对象里面有函数的话， 不会对函数进行拷贝
const info = JSON.parse(JSON.stringify(obj))
console.log(info)
console.log(info === obj)

obj.friend.name = "james"
console.log(info.friend.name) // kobe