// filter、find、map、forEach、reduce

var nums = [10, 5, 11, 32, 60]

// 找出数组中的偶数
const newNums = nums.filter(item => {
  return item % 2 === 0
})
console.log(newNums)

// 将数组中的元素全部乘2
const newNum2 = nums.map(item => {
  return item * 2
})
console.log(newNum2)

nums.forEach(item => {
  // console.log(item + "-xionglp")
})

//将数组中的数字全部叠加
const newNums4 = nums.reduce((prevNum, item) => {
  return prevNum + item;
}, 0)
console.log(newNums4)

const friends = [
  {name: "james", age: 35},
  {name: "kobe", age: 42},
  {name: "curry", age: 36}
]

//找到年龄为36的friend
const findFriends = friends.find(item => {
  return item.age === 36
})
console.log(findFriends)

const findIndex = friends.findIndex(item => {
  return item.age === 36
})
console.log(findIndex) 
