// Vue3响应式原理
const obj1 = {
  name: "xionglp",
  age: 11
}
function obj1NameFn1() {
  console.log("obj1NameFn1被执行")
}
function obj1NameFn2() {
  console.log("obj1NameFn2被执行")
}
function obj1AgeFn1() {
  console.log("obj1AgeFn1被执行")
}
function obj1AgeFn2() {
  console.log("obj1AgeFn2被执行")
}

const obj2 = {
  name: "why",
  address: "深圳市"
}
function obj2NameFn1() {
  console.log("obj2NameFn1被执行")
}
function obj2NameFn2() {
  console.log("obj2NameFn2被执行")
}

const weakMap = new WeakMap();

// 收集依赖结构
const obj1Map = new Map();
obj1Map.set("name", [obj1NameFn1, obj1NameFn2]);
obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2]);
weakMap.set(obj1, obj1Map);

const obj2Map = new Map();
obj2Map.set("name", [obj2NameFn1, obj2NameFn2]);
weakMap.set(obj2, obj2Map);

// 对象的属性发生变化
obj1.name = "james";

const targetMap = weakMap.get(obj1);
const fns = targetMap.get("name");
fns.forEach(item => {
  item()
});


