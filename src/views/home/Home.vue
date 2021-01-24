<template>
  <div class="home">
      <nav-bar class="homeNav">
        <div slot="content">购物街</div>
      </nav-bar>
      <tab-control class="tabFixed" :titles="['流行','新款','精选']" @tabClick="tabClick" v-show="isTabFixed" ref="tabControl1"></tab-control>
      <scroll class="scrollContent" :probeType="3" :pullUpLoad="true" @loadMore="loadMore" @scroll="scroll" ref="scroll">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tabControl" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods :goods="showGoods"></goods>
      </scroll>
      <back-top @click.native="backTop()" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';
import TabControl from '../../components/common/tabControl/TabControl.vue';
import Goods from 'components/content/goods/Goods.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import BackTop from 'components/content/backTop/BackTop.vue';

import {itemListenerMixin} from 'common/mixin.js';
import {getHomeMultidata,getGoods} from 'network/home';

export default {
  name:'Home',
  components: {NavBar,HomeSwiper, RecommendView, FeatureView, TabControl, Goods, Scroll, BackTop},
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        pop:{
          page:0,
          list:[]
        },
        new:{
          page:0,
          list:[]
        },
        sell:{
          page:0,
          list:[]
        }
      },
      currentType:'pop',
      isShowBack:false,
      tabOffsetTop:0,
      isTabFixed:false,
      scrollY:0,
      
    }
  },
  mixins:[itemListenerMixin],
  created(){
      this.getHomeMultidata();
      this.getGoods('pop');
      this.getGoods('new');
      this.getGoods('sell');
  },
  mounted(){
    //图片加载完成监听
      /**
       * 调用refresh()的次数过多，可以利用防抖函数，在第一次触发refresh事件的之后给一个期限（比如200ms），如果200ms之内也有图片加载完成，
       * 则不立即执行refresh函数，只有在该期限内没有图片加载完成，则在最后一次图片加载完成时调用refresh函数
       * 
      */

    //获取tabControl距离顶部的距离
    // console.log(this.$refs.tabControl.$el.offsetTop);
    },
    activated(){
      // console.log('home展示')
      this.$refs.scroll.scrollTo(0,this.scrollY,0)
      this.$refs.scroll.refresh();
    },
    deactivated(){
      // console.log('home不展示')
      //记录离开之前的位置
      this.scrollY=this.$refs.scroll.scrollY()

      //离开之后取消图片加载的事件总线
      this.$bus.$off('imgLoad',this.itemImageListener);
    },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  methods:{
    //轮播图加载完成调用
    swiperImgLoad(){
      // console.log('轮播图加载完成调用');
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
    },
    tabClick(index){
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType='pop'
          break;
        case 1:
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
          break;
      }
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index;
    },
    //上拉加载更多
    loadMore(){
      this.getGoods(this.currentType);
    },
    scroll(position){
      // console.log(position);
      this.isShowBack=(-position.y)>2000
      // console.log((-position.y)>this.tabOffsetTop);
      this.isTabFixed=(-position.y)>this.tabOffsetTop
    },
    backTop(){
      // console.log("返回顶部");
      this.$refs.scroll.scrollTo(0,0,1000);
    },
    //网络请求
    getHomeMultidata(){
        getHomeMultidata().then(res=>{
        // console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      });
    },
    getGoods(type){
      let page=this.goods[type].page+1;
      getGoods(type,page).then(res=>{
        // console.log(res);
        this.goods[type].page=page;
        //...——>解析数组为一个个的数值
        this.goods[type].list.push(...res.data.list);
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      })
    }
  }
}
</script>

<style>
.home{
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
}
.homeNav{
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 10; */
}
.tabFixed{
  position: relative;
  z-index: 10;
}
/* .tabControl{
  position: sticky;
  top: 44px;
  z-index: 10;
} */
.scrollContent{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
  /* height: calc(100%-93px); */
  overflow: hidden;
}
</style>