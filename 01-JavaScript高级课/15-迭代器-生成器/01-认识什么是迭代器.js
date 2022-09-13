const iterator = {
  next: function () {
    return { done: true, value: 123 }
  }
}

let index = 0
const names = ["aaa", "bbb", "ccc"]
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
