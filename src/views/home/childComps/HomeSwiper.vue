<template>
      <swiper>
          <swiper-item v-for="item in banners">
              <a :href="item.link">
                  <img :src="item.image" alt="" @load="imgLoad()">
              </a>
          </swiper-item>
      </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'


export default {
  name:'HomeSwiper',
  components: { Swiper,SwiperItem },
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data(){
      return {
          flag:true
      }
  },
  methods:{
      imgLoad(){
        //   console.log('轮播图加载完了')
        if(this.flag){
            this.flag=false;
            this.$emit('swiperImgLoad')
        }

      }
  }
}
</script>

<style>

</style>