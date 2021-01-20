<template>
  <div>
      <div class="wrapper">
        
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name:'Category',
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      // this.scroll=new BScroll(document.querySelector('.wrapper'),{
      //   probeType:3,
      //   pullUpLoad: true
      // });
      // //监听滚动
      // this.scroll.on('scroll',(position)=>{
      //   // console.log(position);
      // })
      // //上拉加载更多
      // this.scroll.on('pullingUp',()=>{
      //   console.log('上拉加载更多')

      //   this.scroll.finishPullUp()
      // })
    }
}
</script>

<style>
.wrapper{
  height: 300px;
  background-color: cadetblue;
  overflow: hidden;
}
</style>