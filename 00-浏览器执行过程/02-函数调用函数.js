var message = "hello global"

function foo() {
  console.log(message)
}

function bar() {
  var message = "hello bar";
  foo()
}

bar()
// hello global

// 作用域链： 
// 函数的父级作用域和函数的调用位置无关