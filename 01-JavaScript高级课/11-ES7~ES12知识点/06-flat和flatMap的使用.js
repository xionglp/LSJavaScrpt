// flat的用法: 按照指定的深度遍历数组，将所有的元素与遍历出的子数组组成一个新的数组
const nums = [10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]];
const newNums = nums.flat();
console.log(newNums);

const newNums2 = nums.flat(2);
console.log(newNums2);

// 2. flatMap的使用
const nums2 = [10, 20, 30];
const newNums3 = nums2.flatMap(item => {
  return item * 2
});
console.log(newNums3);

//flatMap应用场景
const messages = ["hello world", "hello lilei", "my name is xionglp"]
const words = messages.flatMap(item => {
  return item.split(" ")
})
console.log(words)