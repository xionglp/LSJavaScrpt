// 节流函数（throttle）:
// 1、当事件触发时，会执行这个事件的响应函数；
// 2、如果这个事件会被频繁触发时，那么节流函数会按照一定的频率来执行函数；
// 3、不管在这个中间有多少次触发这个事件，执行函数的频次总是固定的；

function throttle(fn, interval) {
  // 记录上一次的开始时间
  let lastTime = 0

  const _throttle = function() {
    // 获取当前事件触发时的时间
    const nowTime = new Date().getTime()

    // 使用当前触发的时间和之前的时间间隔以及上一次开始的时间，计算出还剩余多长事件需要去触发函数
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      fn()
      lastTime = nowTime
    }
  }

  return _throttle

}