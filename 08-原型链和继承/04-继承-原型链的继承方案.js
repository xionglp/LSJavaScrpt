// 父类： 公共方法和属性
function Person() {
  this.name = "xionglp",
  this.friends = []
}

Person.prototype.eating = function() {
  console.log(this.name + "在吃东西")
}

// 子类： 特有的方法和属性
function Student() {
  this.sno = 111
}

Student.prototype = new Person()

Student.prototype.studying = function() {
  console.log(this.name + "在跑步")
}

var stu = new Student();
console.log(stu.name);
stu.studying()
stu.eating()

// 原型链实现继承的弊端：
// 1. 打印stu对象， 继承的属性是看不到的
// 2. 会创建出多个对象，修改其中一个对象的属性，另外的一个对象的属性也会影响到
// 3. 没有传递参数
console.log(stu)

var stu1 = new Student()
var stu2 = new Student()
stu1.friends.push("kobe")
console.log(stu2.friends)

var stu3 = new Student("jaames", 112);
console.log(stu3)