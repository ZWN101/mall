<template>
  <div class="detail">
      <detail-nav-bar class="detailNav"></detail-nav-bar>
      <scroll class="detailScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goodsInfo='goodsInfo'></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import Scroll from 'components/common/scroll/Scroll.vue';

import {getDetail,GoodsInfo,Shop} from '../../network/detail';

export default {
    name:'Detail',
    components: { DetailNavBar,DetailSwiper,DetailBaseInfo, Scroll, DetailShopInfo},
    data(){
        return {
            iid:null,
            topImages:[],
            goodsInfo:{},
            shop:{}
        }
    },
    created(){
        this.iid=this.$route.params.iid;
        // console.log(this.iid);
        getDetail(this.iid).then(res=>{
            console.log(res);
            let data=res.result;
            //获取顶部轮播图
            this.topImages=data.itemInfo.topImages

            //获取商品的基本信息
            this.goodsInfo=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
            console.log(this.goodsInfo);

            //获取店铺信息
             this.shop=new Shop(data.shopInfo);
             console.log(this.shop);
            
        })
    }
}
</script>

<style scoped>
.detail{
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 10;
}
.detailNav{
    background-color: #fff;
    position: relative;
    z-index: 10;
}
.detailScroll{
    height: calc(100% - 44px);
    /* position: absolute;
    top: 44px;
    left: 0px;
    right: 0px;
    bottom: 0px; */
}
</style>