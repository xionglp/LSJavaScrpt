var obj = {
  name: "xionglp",
  age: 18
}

console.log(obj.__proto__);

// 1. 在当前对象中查找属性
// 2. 如果没有找到，这个时候会去原型链（__proto__）中查找
obj.__proto__ = {

}

obj.__proto__.__proto__ = {

}

obj.__proto__.__proto__.__proto__ = {
  address: "深圳市"
}

console.log(obj.address)