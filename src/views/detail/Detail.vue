<template>
  <div>
      
  </div>
</template>

<script>
import {getDetail} from 'network/detail.js';
export default {
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
            // console.log(req.result);
            //获取顶部轮播图
            this.topImages=req.result.itemInfo.topImages
        })
    }
}
</script>

<style>

</style>