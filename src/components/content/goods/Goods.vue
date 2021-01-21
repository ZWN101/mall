<template>
  <div class="goods">
    <goods-item v-for="item in goods" :good="item" @click.native="itemClick(item)"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'

export default {
    name:'Goods',
    components: { GoodsItem },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
     itemClick(item){
      //  console.log('---');
       this.$router.push('/detail/'+item.iid);
    }
    }
   
}
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>