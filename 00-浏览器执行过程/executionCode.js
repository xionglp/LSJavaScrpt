var name = "xionglp";

var num1 = 1;
var num2 = 2;

var result = num1 + num2;
console.log(result)

// js代码执行的过程
// 1、代码被解析，V8引擎内部会帮在堆内存中创建一个全局对象（Global Object  GO）
// 2、运行代码， V8引擎内部会有一个执行上下文（Execution Context Stack, ECS, ECStack）(函数的调用栈)
// 3、因为我们执行的是全局代码，需要创建 全局执行上下文（Global Execution Context）