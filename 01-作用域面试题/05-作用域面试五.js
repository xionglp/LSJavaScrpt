function foo() {
  var a = b = 10
}

foo()

// console.log(a) // a is not defined
console.log(b) // 10