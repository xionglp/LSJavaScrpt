// 示例1 假如程序中经常要把5和另一个数字相加
function makeAdder(n) {
  return function(m) {
    return m + n;
  }
}

var add5 = makeAdder(5);
var result1 = add5(10);
var result2 = add5(20);
var result3 = add5(30);
console.log(result1, result2, result3);

// 示例2： 打印日志
function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`);
}

log(new Date(), "DEBUG", "查找轮播图的bug");
log(new Date(), "DEBUG", "查找菜单debug");

var currylog = date => type => message => {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`);
}

var nowLog = currylog(new Date());
nowLog("DEBUG")("查找轮播图的bug");
nowLog("FEATURE")("新增添加用户的功能");
nowLog("DEBUG")("查找菜单的bug");