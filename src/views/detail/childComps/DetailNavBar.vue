<template>
  <div>
      <nav-bar class="detailNavBar">
        <div slot="left" @click="backClick()">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
          <div slot="content" class="titles">
            <div  v-for="(item,index) in titles" :class="{activ:currentIndex===index}" @click="itemClick(index)">
               {{item}}
            </div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:'DetailNavBar',
  components: { NavBar },
  data(){
      return {
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
      }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index;
    },
    backClick(){
      this.$router.back();
    }
  }

}
</script>

<style>
.detailNavBar img{
  margin-top: 12px;
}
.titles{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
 .activ{
  color: var(--color-high-text);
}
</style>