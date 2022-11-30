function foo() {
  var a = b = 10
  // var a = 10
  // b = 10
}

foo()

// console.log(a) // a is not defined
// console.log(b) // 10


function bar() {
  var n = m = 100
}

bar()
console.log(n)