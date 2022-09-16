// 迭代器对象：原生对象已经实现可迭代协议
// Array、String、Map、Set、arguments对象、NodeList集合； 对象Object不是

const names = ["aaa", "bbb", "ccc"]
// console.log(names[Symbol.iterator]())
const namesIterableObj = names[Symbol.iterator]()
// console.log(namesIterableObj.next())
// console.log(namesIterableObj.next())
// console.log(namesIterableObj.next())
// console.log(namesIterableObj.next())

for (const item of names) {
  console.log(item)
}


const set = new Set()
set.add(10)
set.add(100)
set.add(1000)
console.log(set[Symbol.iterator])
for (const item of set) {
  console.log(item)
}


// 函数中arguments也是一个可迭代对象
function foo(x, y, z) {
  console.log(arguments[Symbol.iterator])
  for (const arg of arguments) {
    console.log(arg)
  }
}
foo(1, 2, 3)


