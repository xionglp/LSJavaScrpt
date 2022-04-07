"use strct"; // 严格模式

// 存取属性描述符：
// 1、隐藏某一个私有属性希望直接被外界使用和赋值；
// 2、如果我们希望截获某一个属性它访问和设置值的过程，也会使用存储属性描述符

var obj = {
  name: "xionglp",
  age: 18,
  _address: "广州市"
}

// 1、configurable: 表示属性是否可以通过delete删除。默认是false
// 2、enumerable: 是否可枚举 默认是false
// 3、set: 设置属性时会执行函数， 默认是undefined
// 4、get: 获取属性时会执行函数， 默认是undefined
Object.defineProperty(obj, "address", {
  enumerable: true,
  configurable: true,
  set: function(value) {
    bar()
    this._address = value
  },
  get: function() {
    foo()
    return this._address
  }
})

function foo() {
  console.log("获取了一次address的值")
}

function bar() {
  console.log("设置了一次address的值");
}

obj.address = "深圳市";
console.log(obj.address);