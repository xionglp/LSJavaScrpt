// 导出方式一： export 声明语句
// export const name = "xionglp"
// export const age = 18

// 导出方式二： export导出和声明分开
// ESModule 导出， 
// 这个不是一个对象， 格式是这样的而且
// export {
//   name, 
//   age
// }

const name = "kobe"
const age = 34

// 导出方式三： 第二种导出起别名
export {
  name as fName,
  age as fAge
}

