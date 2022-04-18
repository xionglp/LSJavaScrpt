function foo(m = "mmm", n = "nnn") {
  console.log(m, n)
}
foo();

// 对象的默认参数
function printInfo({name, age} = {name: "xionglp", age: 17}) {
  console.log(name, age);
}
printInfo()

// 另外一种写法
function printInfo1({name = "why", age = 18} = {}) {
  console.log(name, age);
}
printInfo1()

// 有默认参数的形参最好放到最后面
function bar(x, y, z = 30) {
  console.log(x, y, z);
}
bar(10, 20);

function baz(x, y, z, m, n = 50) {
  
}
console.log(baz.length)