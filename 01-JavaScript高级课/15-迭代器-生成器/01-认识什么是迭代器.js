/**
 * 迭代器是帮助我们对某个数据结构进行遍历的对象，它也是一个对象，这个对象需要符合迭代协议（iterator protocol）
 * 特定的next方法：一个无参或者一个参数的函数；并且返回2个属性（done, value）的对象
 * 1、done：
 * - 如果迭代器可以产生序列中的下一个值，返回false；
 * - 如果迭代器已将序列迭代完毕，返回true
 * 2、value：返回迭代的值，如果done为true时，可以省略或者为undefined；
 */

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
