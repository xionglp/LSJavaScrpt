function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;

  // this.eatting = function() {
  //   console.log(this.name + "在吃东西")
  // }

  // this.running = function() {
  //   console.log(this.name + "在跑步")
  // }
}

// 将对象里的函数放到构造函数的原型上
Person.prototype.eatting = function() {
  console.log(this.name + "在吃东西");
}

Person.prototype.running = function() {
  console.log(this.name + "在跑步");
}

var person1 = new Person("xiong", 18, 1.88, "深圳市");
var person2 = new Person("kobe", 35, 1.98, "洛杉矶");
person1.eatting()
person2.eatting()