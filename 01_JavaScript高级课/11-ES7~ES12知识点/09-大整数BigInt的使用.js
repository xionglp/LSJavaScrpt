// ES11之前
const maxInt = Number.MAX_SAFE_INTEGER;
// console.log(maxInt) // 9007199254740991
// console.log(maxInt + 1)
// console.log(maxInt + 2) // 可能不能正确的计算

// ES11之后 新增BigInt类
const bigInt = 9007199254740991n
console.log(bigInt + 10n)

const num = 100
console.log(bigInt + BigInt(num))

const smallNum = Number(bigInt)
console.log(smallNum)