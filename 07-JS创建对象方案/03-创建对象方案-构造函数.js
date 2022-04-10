// 认识构造函数： （constructor） 通过new关键字调用一个函数时

// 构造函数一般首字母大写
function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;

  this.eatting = function() {
    console.log(this.name + "在吃东西");
  }
}

// 通过new关键字 调用构造函数，会执行下面几个操作
/**
 * 1、在内存中创建一个空对象{},
 * 2、对象内部的【prototype】属性会被赋值为该构造函数的prototype属性
 * 3、构造函数内部的this，会指向创建出来的新对象
 * 4、执行函数体的代码
 * 5、返回创建出来的新对象
 */
var p1 = new Person("xionglp", 18, 1.88);
var p2 = new Person("kobe", 28, 1.98);
var p3 = new Person("james", 48, 2.04);

console.log(p1);
console.log(p2);
console.log(p3);

console.log(p1.eatting === p2.eatting)
// 构造函数的缺点： 会为每个对象的函数去创建一个函数的对象实例, 解决方法： 将函数的对象实例放到构造函数的原型上，以实现共享