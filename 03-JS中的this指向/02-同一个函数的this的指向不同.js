
// this指向的是什么，和函数所处的位置没有关系
// 和函数调用的方式有关系

function foo() {
  console.log(this)
}

foo()

//创建一个对象，对象中的函数指向foo
var obj = {
  name: "xionglp",
  foo: foo
}

obj.foo() // obj

foo.apply("aaa") // 显示绑定