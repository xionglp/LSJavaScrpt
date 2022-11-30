
// call和apply可以指定this的绑定对象
function foo() {
  console.log(this)
}

var obj = {
  name: "xionglp"
}

foo.call(obj)
foo.apply(obj)

// call和apply的区别
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3, this)
}

sum.call("call", 20, 30, 40)
sum.apply("apply", [20, 30, 40])

// bind绑定
var newFoo = foo.bind("bind")
newFoo()
newFoo()
