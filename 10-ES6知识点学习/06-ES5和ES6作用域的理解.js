// ES5中是没有块级作用域
// 只有在全局和函数中才有作用域

// {
//   var foo = "foo";
// }
// console.log(foo);


// ES6的代码块是用块级作用域的
// 对let、const、function、class声明的类型有效
{
  let message = "message";
  function demo() {
    console.log("demo function")
  };
  class Person {

  }
}

// ReferenceError: message is not defined
// console.log(message)

// 不同的浏览器有不同实现的(大部分浏览器为了兼容以前的代码, 让function是没有块级作用域)
demo()

// ReferenceError: Person is not defined
// var p = new Person()
