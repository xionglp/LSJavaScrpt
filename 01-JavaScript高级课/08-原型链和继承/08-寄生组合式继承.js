function createObject(o) {
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends
}

Person.prototype.running = function() {
  console.log("running---")
}

Person.prototype.eatting = function() {
  console.log("eatting---")
}

function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends);
  this.sno = sno;
  this.score = score;
}

// inheritPrototype(Student, Person);
Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: Student
})

Student.prototype.studying = function() {
  console.log("studying---")
}

var stu = new Student("xionglp", 18, ["kobe"], 1110, 100);
console.log(stu)
stu.studying()
stu.running()
stu.eatting()
console.log(stu.constructor.name)

