var names = ["aaa", "bbb", "ccc"];

// 对数组的解构
var [item1, item2, item3] = names;
console.log(item1, item2, item3);

// 解构最后一个元素
var [, , item4] = names;
console.log(item4);

// 解构第一个元素， 剩余的元素放到一个新的数组中
var [item0, ...newItems] = names;
console.log(item0)
console.log(newItems);

// 解构默认值
var [itema, itemb, itemc, itemd = "ddd"] = names;
console.log(itemd);