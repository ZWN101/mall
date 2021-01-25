<template>
  <div class="detail">
      <detail-nav-bar class="detailNav" @changeTab="changeTab" ref="detailNavBar"></detail-nav-bar>
      <scroll class="detailScroll" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goodsInfo='goodsInfo'></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-good-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-good-info>
      <detail-param-info :goodsParam="goodsParam" ref="param"></detail-param-info>
      <detail-comment-info :comment="comment" ref="comment"></detail-comment-info>
      <goods :goods="recommends" ref="recommend"></goods>
      </scroll>
      <detail-bottom-bar></detail-bottom-bar>
      <back-top @click.native="backTop()" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodInfo from './childComps/DetailGoodInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import Goods from '../../components/content/goods/Goods';
import DetailBottomBar from './childComps/DetailBottomBar.vue';


import Scroll from 'components/common/scroll/Scroll.vue';

import {itemListenerMixin,backTopMixin} from 'common/mixin.js';
import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommends} from '../../network/detail';


export default {
    name:'Detail',
    components: {
         DetailNavBar,DetailSwiper,DetailBaseInfo, Scroll, DetailShopInfo, DetailGoodInfo, DetailParamInfo, DetailCommentInfo, 
         Goods, DetailBottomBar},
    data(){
        return {
            iid:null,
            topImages:[],
            goodsInfo:{},
            shop:{},
            detailInfo: {},
            goodsParam:{},
            comment:{},
            recommends:[],
            themeTopYs:[],
            currentIndex:0,     //防止调用次数过多 
        }
    },
    mixins:[itemListenerMixin,backTopMixin],
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

             //获取商品评价
             if(data.rate.cRate){
                 this.comment=data.rate.list[0];
             }

             //获取推荐商品
             getRecommends().then(res=>{
                //  console.log(res);
                this.recommends=res.data.list;
                console.log(this.recommends);
             })
            
        })
    },
    mounted(){
    //    console.log('detail')
    },
    destroyed(){
        this.$bus.$off('imgLoad',this.itemImageListener);
    },
    updated(){
        
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh();
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.param.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            this.themeTopYs.push(Number.MAX_VALUE);
            // console.log(this.themeTopYs);

            /**
             * 不能将this.themeTopYs的赋值放在created里，因为此时组件还未被创建
             * 
             * 不能放在mounted里，因为DetailGoodInfo.vue组件的根部是一个v-if判断，而向服务器请求是个异步函数，这个时候数据还未被请求过来
             * 当请求过来之后会调用beforeUpdate和update函数，可以将赋值放在update里，但会出现图片未完全加载完的现象，获取的数据不准确
             * 
             * 或者可以在异步请求的回调函数里加上,this.$nextTick里，但是图片高度没有被完全计算在内
             */
        },
        //改变tab栏
        changeTab(index){
            // console.log(index);
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],0);
        },
        //监听滚动
        scroll(position){
            // console.log(position);
            //判断滚动的位置改变currentIndex
            let y=-position.y
            let length=this.themeTopYs.length
            // 0 1 2 3
            for(let i=0;i<length-1;i++){
                //数组中没有最大值时
                // if(this.currentIndex!=i && ((i<length-1 && y>this.themeTopYs[i] && y<=this.themeTopYs[i+1])||(i==length-1 && y>this.themeTopYs[i]))){
                //     this.currentIndex=i;
                //     this.$refs.detailNavBar.currentIndex=i;
                //     console.log(i)
                // }
                if(this.currentIndex!=i && y>this.themeTopYs[i] && y<=this.themeTopYs[i+1]){
                    this.currentIndex=i;
                    this.$refs.detailNavBar.currentIndex=i;
                }
            }

            //监听滚动距离显示backTop
            this.isShowBack=(-position.y)>2000
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
    top: -3px;
    z-index: 11;
}
.detailScroll{
    /* height: calc(100% - 44px); */
    position: absolute;
    top: 44px;
    left: 0px;
    right: 0px;
    bottom: 49px;
    overflow: hidden;
}
</style>