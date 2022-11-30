function createArrayIterator(arr) {
  let index = 0
  return {
    next: function () {
      if (index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

const names = ["james", "kobe", "curry"]
const numbers = [111, 222, 333]

const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

const numbersIterator = createArrayIterator(numbers)
console.log(numbersIterator.next())
console.log(numbersIterator.next())
console.log(numbersIterator.next())
console.log(numbersIterator.next())