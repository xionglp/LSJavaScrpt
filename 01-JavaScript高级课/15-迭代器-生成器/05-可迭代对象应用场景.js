// 1、 for...of
// 2. 展开语法

const iterableObj = {
  names: ["abc", "cba", "nba"],
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

const names = ["aaa", "bbb", "ccc"]
const newNames = [...iterableObj, ...names]
console.log(newNames)

// ES9(ES2018)中新增的一个特性: 用的不是迭代器
const obj = { name: "xionglp", age: 18, height: 1.88 }
const newObj = { ...obj }
console.log(newObj)


// 解构语法
const [names1, names2] = names
console.log(names1)
console.log(names2)

const { name, age, height } = obj
console.log(name, age)


const set1 = new Set(iterableObj)
// from() 对类似数组或者可迭代对象进行前拷贝的数组实例
const arr1 = Array.from(set1)
console.log(set1)
console.log(arr1)