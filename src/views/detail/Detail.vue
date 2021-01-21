<template>
  <div>
      <detail-nav-bar></detail-nav-bar>
      <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';

import {getDetail} from 'network/detail.js';
export default {
  components: { DetailNavBar,DetailSwiper},
    name:'Detail',
    data(){
        return {
            iid:null,
            topImages:[]
        }
    },
    created(){
        this.iid=this.$route.params.iid;
        // console.log(this.iid);
        getDetail(this.iid).then(req=>{
            // console.log(req);
            //获取顶部轮播图
            this.topImages=req.result.itemInfo.topImages
        })
    }
}
</script>

<style>

</style>