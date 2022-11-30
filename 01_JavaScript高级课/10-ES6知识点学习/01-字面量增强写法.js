var age = 18;
var height = 1.88;
var message = "xionglp"

var obj = {
  // 1. 属性的简写 property shorthand
  age,
  height,

  // 2. 方法的简写 method shorthand
  foo: function() {
    console.log(this)
  },
  bar() {
    console.log(this)
  },
  baz: () => {
    console.log(this)
  },
  // 3. 计算属性名
  [message + 123]: "hahaha"
}

obj.bar()
obj.baz()
console.log(obj)