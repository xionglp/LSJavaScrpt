class HYError {
  constructor(errCode, errMessage) {
    this.errCode = errCode
    this.errMessage = errMessage
  }
}

function foo(type) {
  if (type === 1) {
    // 1. 抛出基本数据类型
    // throw "error message"

    // 2. 抛出一个对象类型
    // throw { errCode: -100014, errMessage: "type不能为0" }

    // 3. 创建一个类，创建类对应的对象
    // const errorObj = new HYError(-100002, "type不能为0")
    // throw errorObj;

    // 4. 系统提供了一个内置类Error
    // throw new Error("type不能为0")

    // 5. Error的子类 TypeError
    throw new TypeError("type类型不能为0")

  }
}

foo(1)

console.log("后续代码继续执行")