
// 函数内部再定义函数

function makeAdder(count) {
  function add(num) {
    return count + num
  }

  return add
}

const add5 = makeAdder(5);
console.log(add5(10))
console.log(add5(20))

const add10 = makeAdder(10)
console.log(add10(10))
console.log(add10(20))