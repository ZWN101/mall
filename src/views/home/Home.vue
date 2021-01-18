<template>
  <div class="home">
      <nav-bar class="homeNav">
        <div slot="content">购物街</div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tabControl" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods :goods="showGoods"></goods>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';
import TabControl from '../../components/common/tabControl/TabControl.vue';
import Goods from 'components/content/goods/Goods.vue';


import {getHomeMultidata,getGoods} from 'network/home';

export default {
  name:'Home',
  components: {NavBar,HomeSwiper, RecommendView, FeatureView, TabControl, Goods},
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
      currentType:'pop'
    }
  },
  created(){
      this.getHomeMultidata();
      this.getGoods('pop');
      this.getGoods('new');
      this.getGoods('sell');
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  methods:{
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
      })
    }
  }
}
</script>

<style>
.home{
  padding-top: 44px;
  padding-bottom: 600px;
}
.homeNav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 10;
}
.tabControl{
  position: sticky;
  top: 44px;
  z-index: 10;
}
</style>