const message = "hello world";
const newMessage = message.padStart(15, "*").padEnd(20, "-");

console.log(newMessage);

// 案例 隐藏身份证号或者手机号

const phone = "18219245574";
const newPhone = phone.slice(-4).padStart(phone.length, "*");
console.log(newPhone)
