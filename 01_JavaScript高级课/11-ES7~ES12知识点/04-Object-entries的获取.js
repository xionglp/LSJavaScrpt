const obj = {
  name: "xionglp",
  age:18,
  height: 1.88
}

console.log(Object.entries(obj))

// Object entries
// 通过Object.entries 可以获取一个数组， 数组中存放着可枚举的键值对数据
const objEntries = Object.entries(obj);
objEntries.forEach(item => {
  console.log(item[0], item[1])
});

console.log(Object.entries(["abc", "nba", "mba"]))
console.log(Object.entries("abc"));