var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1(); // person1
person1.foo1.call(person2); // 显示绑定高于隐式绑定， person2

person1.foo2(); // 箭头函数不绑定this， this在上层作用域找 ，window
person1.foo2.call(person2); // window

person1.foo3()(); // 独立函数调用， window
person1.foo3.call(person2)(); // window
person1.foo3().call(person2); // person2

person1.foo4()(); // person1
person1.foo4.call(person2)(); // person2
person1.foo4().call(person2); // person1