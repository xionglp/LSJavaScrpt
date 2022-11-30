// 类的声明
class Person {
  
}

// 研究一下类的特性
console.log(Person.prototype)
console.log(Person.prototype.__proto__)
console.log(Person.prototype.constructor)

var p = new Person()
console.log(p.__proto__ === Person.prototype)