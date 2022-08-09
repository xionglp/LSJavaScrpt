function foo(m, n, ...args) {
  console.log(m, n);
  console.log(args);
}

foo(10, 20, 30, 40, 50);

// 剩余参数必须放到最后面

// ES6中箭头函数的补充：
// 箭头函数没有prototype

var bar = () => {
  console.log(this, arguments);
}

console.log(bar.prototype);

// TypeError: bar is not a constructor
var b = new bar();
console.log(b)
