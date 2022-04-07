// 1、通过new Object()方式
var obj = new Object()
obj.name = "xionglp";
obj.age = 18;
obj.height = 1.88
obj.running = function() {
  console.log(this.name + "在跑步")
}

// 字面量形式创建对象
var info = {
  name: "kobe",
  age: 35,
  age: 1.98,
  runnning: function() {
    console.log(this.name + "在跑步")
  }
}


