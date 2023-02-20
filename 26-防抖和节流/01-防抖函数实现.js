// 防抖: 
// 多次触犯事件， 事件处理函数只能执行一次；
// 当一个事件被触发，准备执行事件函数前，会先等待一定的时间， 
// 在这个等待的时间内，如果没有再次被触发，那么久执行，如果又触发了，那就本次作废，重置等待时间，直到最终能执行
// 应用场景: 搜索框搜索输入，输完最后一个再发送请求，手机号、邮箱的校验

// function debounce(func, delay) {
//   let timer = null // 记录上次的timer
//   const _debounce = function() {
//     if (timer) clearTimeout(timer) // 如果有再次触发事件， 将取消上一次的事件
//     timer = setTimeout(() => {
//       func.call(this)
//       timer = null // 执行过函数后，将timer置为null
//     }, delay)
//   }
//   return _debounce
// }

function debounce(func, delay) {
  let timer = null // 记录上次的timer
  const _debounce = () => {
    if (timer) clearTimeout(timer) // 如果有再次触发事件， 将取消上一次的事件
    timer = setTimeout(() => {
      func()
      timer = null // 执行过函数后，将timer置为null
    }, delay)
  }
  return _debounce
}