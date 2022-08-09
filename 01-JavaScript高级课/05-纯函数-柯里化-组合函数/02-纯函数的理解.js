// 判断一个函数是否为纯函数：
// 1. 确定你的输入内容不会被任意的修改，并且确定自己的输入一定会有确定的输出
function foo(num1, num2) {
  return num1 * 2 + num2 * num2;
}

// bar() 不是一个纯函数， 因为修改的外部的name属性值
var name = "aaa";
function bar() {
  name = "abc";
}

function baz(info) {
  info.age = 100
}

// baz() 不是一个纯函数， 因为修改的参数对象的值
var obj = { name: "xionglp", age: 18 }
baz(obj);
console.log(obj);