var names = ["aaa", "bbb", "ccc", "ddd"];

// slice函数本身它不会修改原来的数组, 是一个纯函数
var names1 = names.slice(0, 3);
console.log(names1);
console.log(names);

// splice() 会修改掉调用的数组对象本身，不是一个纯函数
var names2 = names.splice(1, 2);
console.log(names2);
console.log(names);