// 防抖函数

/**
 * 防抖函数（立即执行和延时执行）
 * @param {Fcuntion} fun 需要执行的函数
 * @param {*} delay 延时的时间，单位: ms
 * @param {*} immediate 是否立即执行
 */
function debounce(fun, delay = 500, immediate = true) {
  let timer = null;
  return function (args) {
      let that = this
      let _args = args;
  if (timer) clearTimeout(timer);
      if ( immediate ) {
      if ( !timer ) fun.apply(that, _args);
          timer = setTimeout(function(){
              timer = null;
          }, delay);
      }
      else {
          timer = setTimeout(function(){
              fun.call(that, _args)
          }, delay);
      }
  }
}

function eventFun (...arr) {
  console.log(...arr);
}

let doEventFun = debounce(eventFun, 1000, true);

setInterval(function() {
  doEventFun(['我', '成功', '执行了', 'eventFun函数']);
}, 2000);

// 节流函数待补充

// 原文链接：https://juejin.im/post/5c6bab91f265da2dd94c9f9e