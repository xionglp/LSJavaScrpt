
function calc(num1, num2, calcFn) {
  const result = calcFn(num1, num2)
  console.log(result)
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

calc(10, 20, add)
calc(10, 20, sub)
calc(10, 20, mul)
