var names = ["aaa", "bbb", "ccc"]

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = "深圳市"
  }

  set address(value) {
    this._address = value
  }

  get address() {
    return this._address;
  }

  eatting() {
    console.log(this.name + "在吃东西")
  }

  running() {
    console.log(this.name + "在跑步")
  }

  // 类方法
  static randomPerson() {
    var nameIndex = Math.floor(Math.random() * names.length);
    var name = names[nameIndex];
    var age = Math.floor(Math.random() * 100);
    return new Person(name, age);
  }
}

var p = new Person("xionglp", 18)
console.log(p.name)
p.eatting()
p.running()
console.log(p.address)
p.address = "广州市"
console.log(p.address)

for(i = 0; i < 5; i++) {
  console.log(Person.randomPerson())
}