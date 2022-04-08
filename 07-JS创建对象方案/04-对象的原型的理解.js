

var obj = {
  name: "xionglp"
}

// 每个对象中都有一个[[prototype]], 这个属性称为对象的原型（隐式原型）
// 浏览器提供了一个__proto__ 属性，可以让我们查看这个对象的原型
// ES5之后提供了一个Object.getPrototypeOf 来查看对象的原型

console.log(obj.__proto__)
console.log(Object.getPrototypeOf(obj))


// 原型的作用：
// 当我们从一个对象中获取某一个属性时，它会触发[[get]]操作
// 1. 如果在当前对象中查找到对应的属性，直接使用；
// 2. 如果没有找到，那么它会沿着它的原型链去查找[[prototype]]

obj.__proto__.age = 18;
console.log(obj.age);