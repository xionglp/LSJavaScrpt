var obj = {
  name: "xionglp",
  age: 18, 
  height: 1.99
}

// 对象的解构
var {name, height, age} = obj;
console.log(name, age, height);

var { height } = obj;
console.log(height)

var { name: newName } = obj;
console.log(newName)

var { address = "深圳市" } = obj;
console.log(address)

function foo(info) {
  console.log(info.name, info.age)
}

foo(obj)

function bar({ name, height }) {
  console.log(name, height)
}
bar(obj)