// 箭头函数不绑定this指向，而是根据外层作用域指定this

var name = "xionglp";

var foo = () => {
  console.log(this)
}

foo()

var obj = {
  foo: foo
}

obj.foo()
foo.call("aaa")

// 场景二
var bar = {
  data: [],
  getData: function() {
    setTimeout(() => {
      var result = ["aaa", "bbb", "ccc"]
      this.data = result
    }, 2000);
  }
}

bar.getData()