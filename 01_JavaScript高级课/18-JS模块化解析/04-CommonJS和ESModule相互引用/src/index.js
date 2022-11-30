
// ESModule 导入
import { name, age } from "./foo.js"
console.log(name, age)

// CommonJS 导入
const bar = require("./bar.js")
console.log(bar.name, bar.age)