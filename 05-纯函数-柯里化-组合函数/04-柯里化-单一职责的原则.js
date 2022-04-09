// x + 2 + y * 2 + z * z
function add(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * z;
  return x + y + z;
} 

var result = add(10, 20, 30);
console.log(result)

// 柯里化
function sum(x) {
  x = x + 2;
  return function(y) {
    y = y * 2;
    return function(z) {
      z = z * z;
      return x + y + z;
    }
  }
}

var result1 = sum(10)(20)(30);
console.log(result1);