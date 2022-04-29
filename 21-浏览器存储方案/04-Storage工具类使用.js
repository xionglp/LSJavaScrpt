import { localCache } from "./03-Storage工具类封装.js"

const obj = {
  message: "localStorage",
  height: 100,
}

localCache.setItem("userInfo", obj)
const info = localCache.getItem("userInfo")
console.log(info)
