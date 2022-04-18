// Symbol 符号类型， 独一无二

const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false

const s3 = Symbol("aaa");
console.log(s3.description);

// Symbol值作为key
const obj = {
  [s1]: "aaa",
  [s2]: "bbb"
}
obj[s3] = "ccc";

const s4 = Symbol();
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ddd"
})
console.log(obj);
console.log(obj[s1], obj[s2], obj[s3], obj[s4]);

// 使用Symbol作为key的属性名时， 遍历/Object.keys()获取不到这些Symbol的值
// 需要Object.getOwnPropertySymbols获取所有的Symbol的key
console.log(Object.getOwnPropertySymbols(obj))

console.log("--------------------------------------")

const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
console.log(sa === sb);

const key = Symbol.keyFor(sa);
console.log(key);

const sc = Symbol.for(key);
console.log(sc);
console.log(sc === sa);