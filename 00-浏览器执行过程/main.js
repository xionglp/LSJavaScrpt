

/*
  1、浏览器的渲染过程？
  2、认识浏览器内核（google在使用的是Blik）
  3、JS引擎： google浏览器使用的V8引擎

  V8引擎的原理：
  1、javascript源代码通过Parser模块转换成抽象语法树；
  2、通过Ignition解释器将AST抽象语法树转换成ByteCode字节码；
  3、通过TurboFan编译器将字节码编译成CPU可执行的机器码；


*/

foo(123)

function foo(m) {
  console.log(num)
  var num = 10;
  var num2 = 20;
  console.log("foo")
}

// 函数调用函数的过程
function bar() {

}