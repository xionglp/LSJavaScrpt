class LSArray extends Array {
  firstItem() {
    return this[0]
  }

  lastItem() {
    return this[this.length - 1]
  }
}

var arr = [1, 2, 3, 4];
console.log(arr.firstItem());
console.log(arr.lastItem());