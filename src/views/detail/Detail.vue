<template>
  <div class="detail">
      <detail-nav-bar class="detailNav"></detail-nav-bar>
      <scroll class="detailScroll" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goodsInfo='goodsInfo'></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- <detail-good-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-good-info> -->
      <detail-param-info :goodsParam="goodsParam"></detail-param-info>
      </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import DetailGoodInfo from './childComps/DetailGoodInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';

import {getDetail,GoodsInfo,Shop,GoodsParam} from '../../network/detail';

export default {
    name:'Detail',
    components: { DetailNavBar,DetailSwiper,DetailBaseInfo, Scroll, DetailShopInfo, DetailGoodInfo, DetailParamInfo},
    data(){
        return {
            iid:null,
            topImages:[],
            goodsInfo:{},
            shop:{},
            detailInfo: {},
            goodsParam:{}
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

             //获取商品详情
             this.detailInfo=data.detailInfo;

             //获取商品尺寸和参数等
             this.goodsParam=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            
        })
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh();
        }
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