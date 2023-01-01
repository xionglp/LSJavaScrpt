function add1(x, y, z) {
  return x + y + z;
}

function add2(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

// 柯里化函数的实现
function lsCurrying(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      function curried2(...args2) {
        return curried.apply(this, [...args, ...args2])
      }
      return curried2;
    }
  }
  return curried;
}

var curryAdd = lsCurrying(add1);

console.log(curryAdd(10, 20, 30));
console.log(curryAdd(10, 20)(30));
console.log(curryAdd(10)(20)(30));

