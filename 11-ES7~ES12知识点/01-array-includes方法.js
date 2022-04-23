// array includes 判断某个元素是否在数组中

const messages = ["aaa", "bbb", "ccc", "ddd"];

if (messages.indexOf("bbb") !== -1) {
  console.log("包含bbb元素")
}

if (messages.includes("ccc")) {
  console.log("包含ccc元素");
}