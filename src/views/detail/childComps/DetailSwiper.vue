<template>
  <div>
      <swiper class="detailSwiper">
          <swiper-item v-for="item in topImages">
            <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'

import {getDetail} from 'network/detail.js';
export default {
  name:'DetailSwiper',
  components: { Swiper,SwiperItem },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style>
.detailSwiper{
  height: 300px;
}
</style>