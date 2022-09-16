
/**
 * 可迭代对象：
 * 当一个对象实现iterable protocol协议时，就是一个可迭代对象；
 * 这个对象必须实现@@iterable方法，在代码中使用Symbol.iterator访问该属性；
 * 好处： 当一个对象变成可迭代对象，进行迭代操作时(for...of),就会调用它的@@iterable方法；
 */

// 可迭代对象
const iterableInfoObj = {
  names: ["aaa", "bbb", "ccc"],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

// console.log(iterableInfoObj[Symbol.iterator])

// 迭代器
// const iteratorInfo = iterableInfoObj[Symbol.iterator]()
// console.log(iteratorInfo.next())
// console.log(iteratorInfo.next())
// console.log(iteratorInfo.next())
// console.log(iteratorInfo.next())

// for...of 可以遍历的东西必须是一个可迭代对象
for (const item of iterableInfoObj) {
  console.log(item)
}
