export function debounce(fn,delay){
    let timer=null;
    return function (...args) {
      if(timer) clearTimeout(timer)//每次完成一次图片加载（间隔时间小于200ms），就要清除一次定时器，此时定时器会重新开始计时
      timer=setTimeout(()=>{
        fn.apply(this,args);
        // console.log('----');
      },delay);
      }
  }