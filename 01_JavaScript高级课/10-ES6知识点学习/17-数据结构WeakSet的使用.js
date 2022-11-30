// WeakSet 只能存放对象数据类型，不能存放基本数据类型
// 对对象是一个弱引用，不能通过遍历获取到其中的元素

const weakSet = new WeakSet();

const obj = { message: "xionglp" };
weakSet.add(obj);
// TypeError: Invalid value used in weak set
// weakSet.add(10);

// WeakSet应用场景
const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }

  running() {
    if (!personSet.has(this)) {
      throw new Error("不能通过非constructor构造函数创建出来的对象调用running方法");
    }
  }
}

let p = new Person();
p.running();

p.running.call({name: "xionglp"});