class Person {

}

function mixinRunner(baseClass) {
  class newClass extends baseClass {
    running() {
      console.log("running--")
    }
  }
  return newClass;
}

function mixinEater(baseClass) {
  class newClass extends baseClass {
    eatting() {
      console.log("eatting--")
    }
  }
  return newClass;
}

class Student extends Person {

}

var newStudent = mixinRunner(mixinEater(Student))
var ns = new newStudent();
ns.running()
ns.eatting()