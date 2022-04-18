// 创建Set  集合类型： Set不能存放相同的元素
const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);

set.add(10);
// console.log(set);

set.add({});
set.add({}); // 对象的内存地址不同
// console.log(set);

// 对数组元素进行去重的方法
const arr = [10, 20, 30, 40, 22, 10, 20];

// const newArr = []
// for(const item of arr) {
//   if (newArr.indexOf(item) === -1) {
//     newArr.push(item)
//   }
// }
// console.log(newArr);

const arrSet = new Set(arr);
// const newArr = Array.from(arrSet);
const newArr = [...arrSet];
console.log(newArr);

// Set的常用方法
// 1. add()
arrSet.add(100);

// 2. has()
console.log(arrSet.has(100));

// 3. clear()
// arrSet.clear()

// 4. 对Set进行遍历
arrSet.forEach(item => {
  console.log(item);
})




