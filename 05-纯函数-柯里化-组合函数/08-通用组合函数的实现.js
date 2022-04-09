function double(m) {
  return m * 2;
}

function square(n) {
  return n ** 2;
}

function lsComposeFn(...fns) {
  var length = fns.length;
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError("Expected arguments are functions")
    }
  }

  function compose(...args) {
    var index = 0;
    var result = length ? fns[index].apply(this, args) : args;
    while(++index < length) {
      result = fns[index].apply(this, [result]);
    }
    return result
  }
  return compose;
}

var newFn = lsComposeFn(double, square);
console.log(newFn(20));

