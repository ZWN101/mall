<template>
  <div class="shopInfo">
      <div class="shopTop">
          <img :src="shop.logo" alt="">
          <span class="shopTitle">{{shop.name}}</span>
      </div>
      <div class="shopMiddle">
          <div class="shopItem shopItemLeft">
          <div class="infoSells">
          <div class="count">
              {{shop.sells|sellCountFilter}}
          </div>
          <div class="text">
              总销量
          </div>
          </div>
          <div class="infoGoods">
          <div class="count">
             {{shop.goodsCount}}
          </div>
          <div class="text">
              全部宝贝
          </div>
          </div>
          </div>
          <div class="shopItem shopItemRight">
              <table>
                  <tr v-for="(item,index) in shop.score">
                      <td>{{item.name}}</td>
                      <td class="score" :class="{scoreBetter:item.isBetter}">{{item.score}}</td>
                      <td class="better" :class="{betterMore:item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shopBottom">
          <div class="enterShop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailShopInfo',
    props:{
        shop:{
            type:Object,
            default(){
                return {}
                }
        }
    },
    filters:{
        sellCountFilter(value){
            if(value<10000) return value;
            return (value/10000).toFixed(1)+'万'
        }
        }
}
</script>

<style>
.shopInfo{
    padding: 25px 8px;
}
.shopTop{
    line-height: 45px;
    display: flex;
    align-items: center;
}
.shopTop img{
width: 45px;
height: 45px;
border-radius: 50%;
border: 1px solid rgba(0,0,0,.1);
}
.shopTop .shopTitle{
    margin-left: 10px;
}
.shopMiddle{
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.shopItem{
    flex: 1;
}
.shopItemLeft{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
}
.shopItemLeft .count{
    font-size: 18px;
}
.shopItemLeft .text{
    margin-top: 10px;
    font-size: 12px;
}
.shopItemRight{
    font-size: 13px;
    color: #333;
    border-left: 2px solid #e6e6ee;
}
.shopItemRight table{
    width: 120px;
    margin-left: 30px;
}
.shopItemRight table td{
    padding: 5px 0;
}
.shopItemRight .score{
    color: #f13e3a;
}
.shopItemRight .scoreBetter{
    color: #5ea732;
}
.shopItemRight  .better span{
    background-color: #f13e3a;
}
.shopItemRight  .betterMore span{
    background-color: #5ea732;
}
.shopBottom{
    text-align: center;
    margin-top: 15px;
}
.enterShop{
    display: inline-block;
    width: 100px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #f2f5f8;
    border-radius: 5px;
}
</style>