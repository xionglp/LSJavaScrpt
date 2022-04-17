// 传统面向对象多态的前提：
// 1. 必须有继承（继承是多态的前提）
// 2. 必须有子类重写父类的方法
// 3. 父类引用指向子类对象

class Shape {
  getArea() {

  }
}

class Reatangle extends Shape {
  getArea() {
    return 100
  }
}

class Circle extends Shape {
  getArea() {
    return 200
  }
}

// 多态： 当不同的数据类型执行同一操作时，如果表现出来的行为（形态）不一样，那么就是多态的表现
function calcArea(shape: Shape) {
  console.log(shape.getArea())
}

var reatangle = new Reatangle()
var circle = new Circle()
calcArea(reatangle)
calcArea(circle)



export {}