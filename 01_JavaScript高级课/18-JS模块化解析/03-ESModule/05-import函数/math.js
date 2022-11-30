
// import函数返回的是Promise
import("./foo.js").then(res => {
  console.log(res.name);
})

console.log("后续代码")

// meta属性本身也是一个对象：{url: 当前模块所在的路径}
console.log(import.meta)