var obj = {
  name: "xionglp",
  age: 18
}

console.log(obj.__proto__) // [Object: null prototype] {}
console.log(obj.__proto__.__proto__) // null

// 顶层原型来自哪里
console.log(Object.prototype)
console.log(Object.prototype.constructor);
console.log(Object.prototype.__proto__);

console.log(Object.getOwnPropertyDescriptors(Object.constructor))