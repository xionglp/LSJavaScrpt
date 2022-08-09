// ESModule 导入
// import { name, age } from "./foo.js"
// console.log(name, age)

// import { fName, fAge } from "./foo.js"
// console.log(fName, fAge)

// ESModule导入起别名
// import { fName as hName, fAge as hAge } from "./foo.js";
// console.log(hName, hAge)

// 将导出的所有内容放到一个标识中 * 是通配符代表所有
import * as foo from "./foo.js"
console.log(foo.fName)
console.log(foo.fAge)


