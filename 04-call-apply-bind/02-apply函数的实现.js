Function.prototype.lsApply = function(thisArg, argArray) {
  var fn = this;
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window;
  thisArg.fn = fn;

  var result 
  if(!argArray) {
    result = thisArg.fn();
  } else {
    result = thisArg.fn(...argArray)
  }
  delete thisArg.fn

  return result;
}


function sum(num1, num2) {
  console.log("sum函数被调用", this, num1, num2);
  return num1 + num2
}

const result = sum.lsApply("bbb", [20, 30])
console.log(result)

// const resule = sum.apply("aaa", [20, 30])
// console.log(resule)