// console.log(foo)
// var foo = "foo"

// ReferenceError: Cannot access 'bar' before initialization
// let、const 是没有作用域提升的， 但是var有作用域提升
// bar被创建出来了， 但是不能访问， 
// 有作用域提升： 可以提前访问
// console.log(bar);
// let bar = "bar"

// 通过var在全局声明一个变量，会在window上添加一个属性
// 通过let、const声明是不会在window上添加属性
var message = "message";
console.log(window.message);