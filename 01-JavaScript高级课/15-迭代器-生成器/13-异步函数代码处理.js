// request.js
function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 2000);
  })
}

// 需求: 
// 1> url: why -> res: why
// 2> url: res + "aaa" -> res: whyaaa
// 3> url: res + "bbb" => res: whyaaabbb

// 第一种方案, 回掉地狱
// requestData("xionglp").then((res) => {
//   console.log(res)
//   requestData(res + "aaa").then((res2) => {
//     console.log(res2)
//     requestData(res2 + "bbb").then(res3 => {
//       console.log(res3)
//     })
//   })
// })

// 第二种方案，Promise中的then返回值来解决
// requestData("xionglp").then(res => {
//   return requestData(res + "aaa")
// }).then(res => {
//   console.log(res)
//   return requestData(res + "bbb")
// }).then(res => {
//   console.log(res)
// })

// 第三种方案，Promise+generator来实现
function* getData() {
  const res1 = yield requestData("xionglp") // 返回的是Promise
  const res2 = yield requestData(res1 + "aaa")
  const res3 = yield requestData(res2 + "bbb")
  console.log(res3)
}

// 手动执行生成器函数
// const generator = getData()
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       generator.next(res)
//     })
//   })
// })

// 自动执行生成器函数
function execGenerator(genFn) {
  const generator = genFn()
  function exec(res) {
    const result = generator.next(res)
    if (result.done) {
      return result.value
    }
    result.value.then(res => {
      exec(res)
    })
  }
  exec()
}
// execGenerator(getData)

// 第四种方案，async、await
async function getData1() {
  const res1 = await requestData("xionglp")
  const res2 = await requestData(res1 + "aaa")
  const res3 = await requestData(res2 + "bbb")
  const res4 = await requestData(res3 + "ccc")
  console.log(res4)
}
getData1()