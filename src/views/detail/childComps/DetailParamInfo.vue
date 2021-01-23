<template>
  <div class="paramInfo" v-if="Object.keys(goodsParam).length!=0">
      <table class="info">
          <tr v-for="(item,index) in goodsParam.infos">
              <td class="infoParamKey ">{{item.key}}</td>
              <td class="paramValue">{{item.value}}</td>
          </tr>
      </table>
      <table class="size" v-for="item in goodsParam.sizes">
          <tr v-for="sizes in item">
              <td v-for="size in sizes">{{size}}</td>
          </tr>
      </table>
      <div class="info-img" v-if="goodsParam.image.length !== 0">
        <img :src="goodsParam.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:'DetailParamInfo',
    props:{
        goodsParam:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    mounted(){
        // console.log(this.goodsParam.infos[0]);
    }
}
</script>

<style>
.paramInfo{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}
.paramInfo table{
    width: 100%;
    border-collapse: collapse;
}
.table tr{
    height: 42x;
}
.paramInfo table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
.infoParamKey{
    width: 95px;
}
.info{
    border-top: 1px solid rgba(0,0,0,.1);
}
.paramValue{
    color: #eb4868
}
.info-img img {
    width: 100%;
  }
</style>