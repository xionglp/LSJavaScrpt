const names = ["aaa", "bbb", "ccc"];
const message = "xionglp";
const info = { name: "xionglp", age: 18 };

function foo(x, y, z) {
  console.log(x, y, z);
}

foo(...names);
foo(...message);

// 构造数组
const newNames = [...names, ...message];
console.log(newNames);

// 构建字面量对象
const obj = { ...info, address: "深圳市", ...names };
console.log(obj);