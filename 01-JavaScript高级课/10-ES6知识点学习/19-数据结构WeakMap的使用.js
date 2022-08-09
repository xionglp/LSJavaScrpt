// WeakMap 不能使用基本数据类型作为key， 只能使用对象作为key
// WeakMap 是弱引用

const weakMap = new WeakMap();

const obj = { message: "xionglp" };
weakMap.set(obj, "aaa");

// 常见的方法和map一样， 但是WeakMao不能遍历