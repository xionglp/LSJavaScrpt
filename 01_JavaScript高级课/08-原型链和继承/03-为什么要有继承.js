// 有很多重复的代码
function Student(name, age, sno) {
  this.name = name;
  this.age = age;
  this.sno = sno;
}

Student.prototype.eating = function() {
  console.log(this.name + "在吃饭")
}

Student.prototype.running = function() {
  console.log(this.name + "在跑步")
}

Student.prototype.studying = function() {
  console.log(this.name + "在学习")
}


function Teacher(name, age, title) {
  this.name = name;
  this.age = age;
  this.title = title;
}

Teacher.prototype.eating = function() {
  console.log(this.name + "在吃饭")
}

Teacher.prototype.running = function() {
  console.log(this.name + "在跑步")
}

Teacher.prototype.teaching = function() {
  console.log(this.name + "在教书")
}

