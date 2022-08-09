const info = {
  name: "xionglp",
  friends: { name: "kobe" }
}

const obj = { ...info, name: "why" };
console.log(obj.name); // why 
obj.friends.name = "james";
console.log(info.friends.name);  // james

// 浅拷贝： friends 指向的都是同一个内存地址  