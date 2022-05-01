// 防抖函数（debounce）:
// 1、当事件触发时，相应的函数并不会立即触发，而是等待一定的时间；
// 2、当事件密集触发时，函数的触发会被频繁的推辞；
// 3、只有等待了一段时间也没有事件触发时，才会真正的执行函数；

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

