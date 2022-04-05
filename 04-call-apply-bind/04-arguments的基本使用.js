// arguments 类数组对象， 本质上是一个对象
function foo() {
  console.log(arguments)

  // console.log(arguments.length)
  // console.log(arguments[0])
  // console.log(arguments[1])

  // arguments 转数组
  // 1、自己遍历
  var newArguments = []
  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    newArguments.push(arg)
  }
  // console.log(newArguments)

  // 2、 Array.property.slice.call()
  // const newArguments = Array.prototype.slice.call(arguments)
  // console.log(newArguments)

  // 3、ES6语法
  // const newArguments = Array.from(arguments)
  // const newArguments = [...arguments]
  // console.log(newArguments)
}

foo(10, 20, 30, 40, 50)

// 补充： Array.slice()的实现
Array.prototype.lsSlice = function(start, end) {
  var arr = this;
  start = start || 0;
  end = end || arr.length;
  var newArr = []
  for (let i = start; i < end; i++) {
    const item = arr[i];
    newArr.push(item);
  }
  return newArr
}

const newNums = Array.prototype.lsSlice.call([10, 20, 30, 40, 50], 1, 3);
console.log(newNums);

// 箭头函数中没有arguments， 多使用剩余参数
var bar = (num1, ...nums) => {
  console.log(num1)
  console.log(nums)
  var result = nums.reduce((prev, item) => prev + item);
  return result + num1;
} 

const result = bar(10, 20, 30)
console.log(result)