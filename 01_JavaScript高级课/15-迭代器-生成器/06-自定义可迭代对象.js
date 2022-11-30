// 创建一个教室类，创建出来的对象都是可迭代对象

class ClassRoom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(stu) {
    this.students.push(stu)
  }

  [Symbol.iterator]() {
    let index = 0
    const arr = Object.values(this)
    return {
      next: () => {
        if (index < arr.length) {
          return { done: false, value: arr[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }

}

const classroom = new ClassRoom("3幢5楼205", "计算机教室", ["james", "kobe", "curry", "why"])
// console.log(Object.keys(classroom))
// console.log(Object.values(classroom))

classroom.entry("lilei")
console.log(classroom)
for (const stu of classroom) {
  console.log(stu)
}