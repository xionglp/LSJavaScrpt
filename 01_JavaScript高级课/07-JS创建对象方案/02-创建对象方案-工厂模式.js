// 工厂模式： 工厂函数
function createPerson(name, age, height) {
  var person = {}
  person.name = name;
  person.age = age;
  person.height = height;
  person.eatting = function() {
    console.log(person.name + "在吃东西");
  }

  return person;
}

var p1 = createPerson("xionglp", 19, 1.88);
var p2 = createPerson("kobe", 33, 1.98);
var p3 = createPerson("james", 27, 1.99);
console.log(p1);
console.log(p2);
console.log(p3);