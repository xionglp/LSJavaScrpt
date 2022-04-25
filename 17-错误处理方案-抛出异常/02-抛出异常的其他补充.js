

function foo(type) {
  if (type === 1) {
    // 1. 抛出基本数据类型
    // throw "error message"

    // 2. 抛出一个对象类型
    throw { errCode: -100014, errMessage: "type不能为0" }

  }
}

foo(1)

console.log("后续代码继续执行")