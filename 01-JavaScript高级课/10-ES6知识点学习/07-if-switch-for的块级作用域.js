// if、switch、for语句的代码块就是块级作用域

// ReferenceError: foo is not defined
// if (true) {
//   let foo = "foo"
// }
// console.log(foo)

// var color = "red";
// switch (color) {
//   case "red":
//     var foo = "foo";
//     let bar = "bar";
// }
// console.log(foo);
// // ReferenceError: foo is not defined
// console.log(bar);

// for (var i = 0; i < 10; i++) {
//   console.log("hello world" + i);
// }
// console.log(i);

for(let i = 0; i < 10; i++) {
  
}
// ReferenceError: i is not defined
console.log(i);