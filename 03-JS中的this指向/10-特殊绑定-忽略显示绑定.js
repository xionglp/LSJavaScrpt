function foo() {
  console.log(this)
}

foo.apply("aaa")
foo.apply({})

// apply、call、bind: 当传入的是null和undefined时，自动将this绑定为全局对象
foo.apply(null)
foo.apply(undefined)
var bar = foo.bind(null)
bar()