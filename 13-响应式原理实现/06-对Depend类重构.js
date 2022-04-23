let activeReactiveFn = null
class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  // addDepend(reactiveFn) {
  //   this.reactiveFns.add(reactiveFn)
  // }

  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

function watchFn(fn) {
  activeReactiveFn = fn;
  fn()
  activeReactiveFn = null
}

// 封装获取depend对象的函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取depend对象
  let depend = map.get(key)
  if(!depend) {
    depend = new Depend();
    map.set(key, depend)
  }
  return depend
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18 // depend对象
}

// 监听对象属性变化： Proxy(vue3),Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // 根据target.key获取对应的depend
    const depend = getDepend(target, key)
    // 给depend添加相应函数
    // depend.addDepend(activeReactiveFn)
    depend.depend()
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    const depend = getDepend(target, key)
    console.log(depend)
    depend.notify()
  }
})

watchFn(() => {
  console.log(objProxy.name , "--------")
  console.log(objProxy.age, "++++++++++")
})

objProxy.name = "kobe"
objProxy.name = "james"