<template>
  <div class="recommend">
      <div v-for="item in recommends" class="recommendItem">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 5px 0px;
    border-bottom: 10px solid #eee;
}
.recommendItem{
    flex: 1;
}
.recommend img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>