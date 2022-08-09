
// 隐式调用： Object.fn(), 对象会被隐式的绑定到fn函数中的this里面

// 案例一
var obj = {
  name: "xionglp",
  foo: function bar() {
    console.log(this)
  }
}
// obj.foo()

// 案例二
var info = {
  name: "xionglp",
  eating: function() {
    console.log(this.name + "在吃东西")
  },
  running: function() {
    console.log(this.name + "在跑步")
  }
}
// info.eating()
// info.running()

// 案例三
var obj1 = {
  name: "obj1",
  foo: function() {
    console.log(this)
  }
}

var obj2 = {
  name: "obj2",
  bar: obj1.foo
}

obj2.bar() // 和定位的位置没有关系， 和调用的位置有关

