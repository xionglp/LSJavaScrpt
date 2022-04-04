
// var obj = {
//   name: "obj",
//   foo: function() {
//     console.log(this)
//   }
// }

// obj.foo() // 隐式绑定

// obj.foo.call("abc") // call
// obj.foo.apply("abc")// apply

// var bar = obj.foo.bind("aaa")
// bar()

function foo() {
  console.log(this)
}

var obj = {
  name: "obj",
  foo: foo.bind("aaa")
}

obj.foo()
