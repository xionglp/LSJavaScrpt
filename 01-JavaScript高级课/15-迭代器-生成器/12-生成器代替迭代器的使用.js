// 生成器是一种特殊的迭代器，在某些情况下我们可以使用生成器代替迭代器

// 示例一
function* createArrayIterator(arr) {
  // for (const item of arr) {
  //   yield item
  // }

  // yield* 来生产一个可迭代的对象， 相当于yield的语法糖
  yield* arr
}

const names = ["abc", "cba", "nba"]
const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())


// 示例二
// 创建一个函数， 这个函数可以迭代一个范围内的数字
function* createRangeIterator(start, end) {
  let index = start
  while (index < end) {
    yield index++
  }
}

const rangeIterator = createRangeIterator(10, 20)
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())


// 示例三
// class案例
class ClassRoom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(stu) {
    this.students.push(stu)
  }

  // [Symbol.iterator]() {
  //   let index = 0
  //   const arr = Object.values(this)
  //   return {
  //     next: () => {
  //       if (index < arr.length) {
  //         return { done: false, value: arr[index++] }
  //       } else {
  //         return { done: true, value: undefined }
  //       }
  //     }
  //   }
  // }

  *[Symbol.iterator]() {
    yield* this.students
  }
}

const classroom = new ClassRoom("3幢", "1102", ["abc", "cba"])
for (const item of classroom) {
  console.log(item)
}



