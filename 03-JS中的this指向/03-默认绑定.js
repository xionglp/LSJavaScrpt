
// 默认绑定： 独立函数调用

//案例一
function foo() {
  console.log(this)
}
// foo()

// 案例二
function foo1() {
  console.log(this)
}

function foo2() {
  console.log(this)
  foo1()
}

function foo3() {
  console.log(this)
  foo2()
}

// foo3()

// 案例三
var obj = {
  name: "xionglp",
  bar: function foo() {
    console.log(this)
  }
}

var fn = obj.bar
// fn()

// 案例四
function foo4() {
  return function bar() {
    console.log(this)
  }
}

var bar = foo4()
bar()

