// 节流:  
// 事件触发后，规定的时间内（例如2s），事件处理函数不能再次被调用。
// 也就是说规定的时间内，函数只能被调用一次。
// 有频率的执行

// 应用场景: 高频点击，表单重复提交

// function throttle(func, interval) {
//   let startTime = 0
//   const _throttle = function() {
//     const nowTime = new Date().getTime()
//     const waitTime = interval - (nowTime - startTime)
//     if (waitTime <= 0) {
//       func()
//       startTime = nowTime
//     }
//   }

//   return _throttle
// }

function throttle(func, interval) {
  let startTime = 0
  const _throttle = function() {
    const nowTime = new Date().getTime()
    // const waitTime = interval - (nowTime - startTime)
    if (nowTime - startTime >= interval) {
      func()
      startTime = nowTime
    }
  }

  return _throttle
}



