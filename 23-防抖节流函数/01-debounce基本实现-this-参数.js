// 防抖节流函数
function debounce(fn, delay) {
  // 定义一个定时器， 保存上一次的定时器
  let timer = null

  // 真正执行的函数
  const _debounce = function(...args) {
    // 取消上一次的定时器
    if(timer) clearTimeout(timer)
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正需要执行的函数
      fn.apply(this, args)
    }, delay);
  }
  return _debounce
}

