class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eatting() {
    console.log(this.name + "在吃东西");
  }

  running() {
    console.log(this.name + "在跑步")
  }

  personMethod() {
    console.log("出来逻辑1")
    console.log("出来逻辑2")
    console.log("出来逻辑3")
  }

  static staticMethod() {
    console.log("personStaticMethod")
  }
}

class Student extends Person {
  constructor(name, age, sno) {
    super(name, age);
    this.sno = sno
  }

  studying() {
    console.log(this.name + "在学习")
  }

  // 对父类方法的重写
  running() {
    console.log("student " + this.name + "在跑步")
  }

  personMethod() {
    super.personMethod(); // 对父类方法的重写，并且复用父类方法的逻辑
    console.log("出来逻辑4")
    console.log("出来逻辑5")
    console.log("出来逻辑6")
  }

  static staticMethod() {
    super.staticMethod();
    console.log("studentStaticMethod")
  }
}

var stu = new Student("xiong", 18, 1100);
console.log(stu)
stu.studying()
stu.running()
stu.personMethod()
Student.staticMethod()

console.log(Object.getOwnPropertyDescriptors(stu.__proto__))
console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__))
console.log(stu.__proto__ === Student.prototype)
console.log(Object.getOwnPropertyDescriptors(Person))