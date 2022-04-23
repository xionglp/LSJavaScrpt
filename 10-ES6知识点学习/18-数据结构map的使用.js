const obj1 = { name: "kobe" };
const obj2 = { name: "james" };

// const info = {
//   [obj1]: "aaa",
//   [obj2]: "bbb"
// }
// console.log(info);

// 一种映射关系，可以用对象或基本数据类型作为key
const map = new Map();
map.set(obj1, "aaa");
map.set(obj2, "bbb");
map.set(1, "ccc");
console.log(map);

const map2 = new Map([[obj1, "mmm"], [obj2, "nnn"],[1, "zzz"]]);
console.log(map2);

// 常见的属性和方法
console.log(map.size);
map2.set("xionglp", "eee");
console.log(map2.get("xionglp"));
console.log(map2.has(obj1));

map2.delete(1);
console.log(map2);

map2.forEach((item, key) => {
  console.log(item, key);
})

for(const item of map2) {
  console.log(item[0], item[1]);
}