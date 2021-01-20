<template>
  <div ref="wrapper">
    <div>
     <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'Scroll',
    data(){
        return {
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default(){
                return 0
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true
        });
        this.scroll.on('pullingUp',()=>{
            // console.log('上拉加载更多');
            this.$emit('loadMore')
            this.scroll.finishPullUp();
        });
        this.scroll.on('scroll',(position)=>{
            this.$emit("scroll",position)
        })
    },
    methods:{
        scrollTo(x,y,time=2000){
            this.scroll&&this.scroll.scrollTo(x,y,time)
        },
        refresh(){
             this.scroll&&this.scroll.refresh();
        }
    }
}
</script>

<style>
</style>