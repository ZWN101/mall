<template>
  <div>
      <nav-bar class="homeNav">
        <div slot="content">购物街</div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue';

import {getHomeMultidata} from 'network/home';
import RecommendView from './childComps/RecommendView.vue';

export default {
  name:'Home',
  components: {NavBar,HomeSwiper, RecommendView},
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
.homeNav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>