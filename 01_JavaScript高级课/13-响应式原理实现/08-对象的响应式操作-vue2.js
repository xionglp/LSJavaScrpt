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

function reactiveObj(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get: function() {
        const dep = getDepend(obj, key)
        dep.depend()
        return value
      }, 
      set: function(newValue) {
        value = newValue
        const depend = getDepend(obj, key)
        depend.notify()
      }
    })
  })
  return obj;
}

const obj1 = reactiveObj({
  name: "xionglp",
  age: 18
});

watchFn(() => {
  console.log(obj1.name , "--------")
})
obj1.name = "kobe"

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
