<template>
      <div class="tabbarItem" @click="itemClick">
          <div v-if="!isActive"><slot name="item-icon"></slot></div>
          <div v-else><slot name="item-icon-active"></slot></div>
          <div :style="activeStyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:{
            type:String
        },
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            
        }
    },
    computed:{
        isActive(){
            //判断当前活跃的路由是否包含点击的路由，包含则返回大于1，不包含则返回-1
            return this.$route.path.indexOf(this.path)!=-1;
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods:{
         itemClick(){
            this.$router.push(this.path);
        }
    }
}
</script>

<style>
.tabbarItem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tabbarItem img{
    margin-top: 4px;
    width: 24px;
    height: 24px;
    /* 去掉图片默认空白*/
    vertical-align: middle;
}
</style>