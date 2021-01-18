<template>
  <div class="tabControl">
      <div v-for="(item,index) in titles" class="tabControlItem" @click="itemClick(index)" >
          <span :class="{active:index==currentIndex}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemClick(index){
            // console.log(index);
            this.currentIndex=index
        }
    }
}
</script>

<style>
.tabControl{
    display: flex;
    text-align: center;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.tabControlItem{
    flex: 1;
}
.active{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
}
</style>