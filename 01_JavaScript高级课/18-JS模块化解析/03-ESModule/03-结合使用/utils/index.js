
// 方式一：
// import { formatTime, formatPrice } from "./format.js"
// import { add, sub } from "./math.js"

// export {
//   formatPrice,
//   formatTime,
//   add,
//   sub
// }

// 方式二：
// export { formatPrice, formatTime } from "./format.js"
// export { add, sub } from "./math.js"

// 方式三：
export * from "./format.js"
export * from "./math.js"