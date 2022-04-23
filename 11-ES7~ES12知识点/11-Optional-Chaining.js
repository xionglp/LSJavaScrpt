// 可选链

const info = {
  name: "xionglp",
  friends: {
    // girlFriends: {
    //   name: "hmm"
    // }
  }
}

console.log(info.friends?.girlFriends?.name)
console.log("其他代码逻辑")