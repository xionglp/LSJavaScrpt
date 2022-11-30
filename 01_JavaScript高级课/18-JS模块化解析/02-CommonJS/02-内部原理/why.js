const info = {
  name: "xionglp",
  age: 18,
  foo: function() {
    console.log("foo函数")
  }
}

setTimeout(() => {
  info.name = "kobe"
}, 1000);

module.exports = info

// 导出的info对象和main文件中导入的对象 其实是同一个对象