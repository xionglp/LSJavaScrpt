// 防抖节流函数
function debounce(fn, delay, immediate = false, resultCallback) {
  // 定义一个定时器， 保存上一次的定时器
  let timer = null
  let isInvoke = false

  // 真正执行的函数
  const _debounce = function(...args) {
    return new Promise((resolve, reject) => {
      // 取消上一次的定时器
      if(timer) clearTimeout(timer)
      
      // 判断是否需要立即执行
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args)
        if (resultCallback) resultCallback(result)
        resolve(result)
        isInvoke = true
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          // 外部传入的真正需要执行的函数
          const result = fn.apply(this, args)
          if (resultCallback) resultCallback(result)
          resolve(result)
          isInvoke = false
        }, delay);
      }
    })
  }

  // 取消功能
  _debounce.cancle = function() {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}

