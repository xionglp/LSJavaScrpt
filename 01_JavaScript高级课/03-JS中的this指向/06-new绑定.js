

// 通过new关键字调用一个函数（构造器）， this就是调用这个构造器创建出来的对象
// this = 创建出来的对象

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person("xionglp", 18)
console.log(person1.name, person1.age)

var person2 = new Person("kobe", 42)
console.log(person2.name, person2.age)