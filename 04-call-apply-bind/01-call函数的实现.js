Function.prototype.lscall = function(thisArg, ...args) {
  var fn = this;
  thisArg = (thisArg !== null || thisArg !== undefined) ? Object(thisArg): window;

  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn
  return result;
}

function foo() {
  console.log("foo函数被执行", this)
}

function sum(num1, num2) {
  console.log("sum函数调用", this, num1, num2);
  return num1 + num2;
}

// foo.call({name: "xionglp"})

var result = sum.lscall("aaa", 10, 29)
console.log(result)
// foo.lscall()