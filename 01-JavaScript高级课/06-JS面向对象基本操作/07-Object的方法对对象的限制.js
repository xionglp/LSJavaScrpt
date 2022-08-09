var obj = {
  name: "xionnglp",
  age: 18
}
console.log(obj)

// 禁止某个对象继续添加新的属性
Object.preventExtensions(obj)

obj.height = 1.99;
obj.address = "深圳市";
console.log(obj)

// 禁止某个对象删除、配置里面的属性
// for(var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key]
//   })
// }

Object.seal(obj)

delete obj.name;
console.log(obj)

// 让对象的属性值不能修改
Object.freeze(obj)
obj.name = "kobe";
console.log(obj);