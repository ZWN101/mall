<template>
  <div class="goodsItem">
    <!-- <img :src="showGoods" alt="" @load="imgLoad()"> -->
    <img v-lazy='showGoods' alt="" @load="imgLoad()">
    <div class="goodInfo">
    <p class="goodTitle">{{good.title}}</p>
    <div class="detail">
    <span class="price">{{good.price}}</span>
    <span class="collect">{{good.cfav}}</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'GoodsItem',
    props:{
      good:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showGoods(){
        return this.good.image || this.good.show.img
      }
    },
    methods:{
      //img完成加载回调的函数
      imgLoad(){
        // console.log('---------');
        this.$bus.$emit('imgLoad')
      }
    }
}
</script>

<style>
.goodsItem{
  width: 47%;
  font-size: 13px;
}
.goodsItem img{
  width: 100%;
  border-radius: 5px;
}
.goodInfo{
  padding: 5px 0px;
}
.goodTitle{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price{
   color: var(--color-high-text);
}
.detail{
  display: flex;
  justify-content: space-between;
  padding: 3px 0px;
}
.collect{
  position: relative;
}
.collect::before{
    content: '';
    position: absolute;
    left: -15px;
    bottom: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>