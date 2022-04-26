const name = "why"
const age = 18
function sum(num1, num2) {
  return num1 + num2
}

// module.exports = {}
//exports = module.exports
// 指向的是同一个内存地址
// 最总能导出的一定是module.exports

// 第二种导出方式
exports.name = name
exports.age = age
exports.sum = sum

// 这种代码不会进行导出
// exports = {} , 不是一个对象， 用这种字面量写法是不会导出的

// exports = {
//   name,
//   age,
//   sum
// }

