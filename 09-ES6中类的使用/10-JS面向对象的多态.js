// 当不同的数据类型执行同一操作时，表现出不同的形态或者行为是， 那么就是多态的表现

function calcArea(foo) {
  console.log(foo.getArea())
}

var obj = {
  name: "xionglp",
  getArea() {
    return 1000
  }
}

class Person {
  getArea() {
    return 2000
  }
}

var p = new Person();
calcArea(obj)
calcArea(p)