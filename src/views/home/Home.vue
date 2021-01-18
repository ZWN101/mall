<template>
  <div class="home">
      <nav-bar class="homeNav">
        <div slot="content">购物街</div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';
import TabControl from '../../components/common/tabControl/TabControl.vue';


import {getHomeMultidata} from 'network/home';

export default {
  name:'Home',
  components: {NavBar,HomeSwiper, RecommendView, FeatureView, TabControl},
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created(){
     getHomeMultidata().then(res=>{
        // console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
  }
  
}
</script>

<style>
.home{
  padding-top: 44px;
  padding-bottom: 400px;
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
</style>