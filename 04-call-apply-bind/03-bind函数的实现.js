Function.prototype.lsBind = function(thisArg, ...argArray) {
  var fn = this;
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window;
  function proxyFn(...args) {
    thisArg.fn = fn
    var finalArray = [...argArray, ...args];
    var result = thisArg.fn(...finalArray)
    delete thisArg.fn;
    return result
  }

  return proxyFn;
}


function sum(num1, num2, num3, num4) {
  console.log( "sum函数被调用", num1, num2, num3, num4);
  return num1 + num2 + (num3 * num4)
}

var newSum = sum.lsBind("bbb", 10, 20);
var result = newSum(30, 50);
console.log(result);

// var newSum = sum.bind("aaa", 10, 20);
// var result = newSum(30, 40)
// console.log(result)