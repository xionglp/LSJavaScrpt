let activeReactiveFn = null
class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

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

function reactiveObj(obj) {
  return new Proxy(obj, {
    get: function(target, key, receiver) {
      // 根据target.key获取对应的depend
      const dep = getDepend(target, key)
      // 给depend添加相应函数
      dep.depend()
      return Reflect.get(target, key, receiver)
    },
    set: function(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      const depend = getDepend(target, key)
      depend.notify()
    }
  })
}

// 监听对象属性变化： Proxy(vue3),Object.defineProperty(vue2)
const objProxy = reactiveObj(obj);

watchFn(() => {
  console.log(objProxy.name , "--------")
  console.log(objProxy.age, "++++++++++")
})

objProxy.name = "kobe"
objProxy.name = "james"


// -------------------------- info -----------------------
const infoProxy = reactiveObj({
  address: "深圳市"
})

watchFn(function() {
  console.log(infoProxy.address)
})

infoProxy.address = "广州市"

const bar = reactiveObj({
  name: "foo"
})
watchFn(function() {
  console.log(bar.name)
})
bar.name = "bar"
