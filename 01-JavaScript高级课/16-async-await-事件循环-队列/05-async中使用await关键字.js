function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("22222")

      // reject("333")
    }, 2000);
  })
}

async function foo() {
  const res1 = await requestData()
  console.log("后续代码111: ", res1)
  console.log("后续代码222")
}

foo()


// async function foo() {
//   const res1 = await requestData()
//   console.log("res1:", res1)
// }

// foo().catch((err) => {
//   console.log("err:", err)
// })

