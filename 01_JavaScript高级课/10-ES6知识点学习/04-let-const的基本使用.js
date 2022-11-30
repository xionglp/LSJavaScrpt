// console.log(foo)
// var foo = "foo";

// TypeError: Assignment to constant variable.
// const foo = "foo";
// foo = "bar"

// const本质上是传递的值不可以修改
// 但是如果传递的是一个引用类型（内存地址），可以通过引用找到对应的对象，去修改对象内部的属性，这个是可以的
// const obj = {
//   foo: "foo"
// }
// console.log(obj)

// obj.foo = "aaa";
// console.log(obj.foo)

// 通过let、const定义的变量是不可以重复定义的
var foo = "foo";
var foo = "aaa";
console.log(foo);

// let bar = "bar";
// let bar = "aaa";
