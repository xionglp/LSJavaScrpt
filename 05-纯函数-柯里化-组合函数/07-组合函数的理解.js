function double(m) {
  return m * 2;
}

function square(n) {
  return n ** 2;
}

var result = square(double(10))
console.log(result)

function composeFn(m, n) {
  return function(count) {
    return n(m(count))
  }
}

var newFn = composeFn(double, square);
console.log(newFn(10));