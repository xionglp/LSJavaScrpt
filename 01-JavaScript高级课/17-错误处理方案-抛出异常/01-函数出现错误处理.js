function sum(num1, num2) {
  if(typeof num1 !== "number" || typeof num2 !== "number") {
    throw "parameters is error type"
    // return undefined
  }
  return num1 + num2;
}

// console.log(sum(20, 30))
console.log(sum("xionglp", 30))
console.log("后续的代码继续执行")