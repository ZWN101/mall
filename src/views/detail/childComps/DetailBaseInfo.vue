<template>
  <div class="detailBaseInfo" v-if="Object.keys(goodsInfo).length!=0">
      <div class="infoTitle">{{goodsInfo.title}}</div>
      <div class="infoPrice">
          <span class="newPrice">{{goodsInfo.newPrice}}</span>
          <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
          <span class="discount">{{goodsInfo.discount}}</span>
      </div>
      <div class="infoColumns">
          <div v-for="item in goodsInfo.columns">
              {{item}}
          </div>
      </div>
      <div class="infoServices">
          <div v-for="n in goodsInfo.services.length-1">
              <img :src="goodsInfo.services[0].icon" alt="">
              {{goodsInfo.services[n-1].name}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailBaseInfo',
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
            }
    }
}
</script>

<style>
.detailBaseInfo{
    margin-top: 15px;
    color: #999;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
}
.infoTitle{
    color: #222
}
.infoPrice{
    margin-top: 5px;
}
.newPrice{
    font-size: 24px;
    color: var(--color-high-text);
}
.oldPrice{
    text-decoration: line-through;
}
.discount{
    font-size: 12px;
    color: #fff;
    background-color: var(--color-high-text);
    padding: 2px 5px;
    border-radius: 8px;
    position: relative;
    top: -5px;
    left: 5px;
}
.infoColumns{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding: 3px 5px 5px;
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.infoServices{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #333;
    line-height: 60px;
}
.infoServices img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
}
</style>