<template>
  <div>
      <swiper>
          <swiper-item></swiper-item>
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

}
</script>

<style>

</style>