
// 1、configurable: 表示属性是否可以通过delete删除。默认是false
// 2、enumerable: 是否可枚举 默认是false
// 3、writable: 是否可以修改属性的值， 默认是false
// 4、value： 表示属性的值， 默认是undefined

var obj = {
  name: "xionglp",
  age: 18,
  height: 1.88
}
delete obj.height

Object.defineProperty(obj, "address", {
  configurable: false,
  enumerable: true,
  writable: true,
  value: "广州市"
})

obj.address = "深圳市"
console.log(obj)
console.log(obj.address)




