function foo() {

}

// 函数也是一个对象，函数作为对象来说它也有[[prototype]] 隐式原型
console.log(foo.__proto__);
console.log(foo.prototype);

var f1 = new foo();
var f2 = new foo();
console.log(f1.__proto__ === foo.prototype);
console.log(f2.__proto__ === foo.prototype);

f1.__proto__.name = "curry"; 
console.log(f2.name);

function Person() {

}

var p1 = new Person();
var p2 = new Person();

// 默认情况下原型对象上有一个constructor属性对象， 这个constructor属性指向构造函数本身
console.log(Person.prototype.constructor);
console.log(p1.__proto__.constructor);
console.log(p2.__proto__.constructor);

function Student() {

}

// 相当于给Student的prototype重新赋值了一个对象，但是新对象的constructor熟悉指向的是Object构造函数而不是Student构造函数了
Student.prototype = {
  // constructor: Student,
  name: "xionglp",
  age: 18,
  height: 1.88,
  study: function() {
    console.log(this.name + "在学习");
  }
}
var stu1 = new Student()
console.log(stu1.name); 

// 通过Object.definePrototype方式添加constructor
Object.defineProperty(Student, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: Student
})

