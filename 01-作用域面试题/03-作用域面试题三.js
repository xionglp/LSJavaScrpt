var n = 100

function foo1() {
  console.log('foo1 - ', n) // 100
}

function foo2() {
  var n = 200
  console.log('foo2 - ', n)  // 200
  foo1()
}

foo2()
console.log('main - ', n) // 100