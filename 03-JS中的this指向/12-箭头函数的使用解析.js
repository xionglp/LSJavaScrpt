var nums = [12, 30, 45, 78];

// 将数组中的数字的偶数*10进行累计相加
const result = nums.filter(item => item % 2 === 0)
                    .map(item => item * 10)
                    .reduce((prevValue, item) => prevValue + item);
console.log(result)

// 一个箭头函数只有一行代码，并且返回一个对象
var bar = () => ({name: "xionglp", age: 19})