<template>
  <div class="Toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
    data(){
        return {
            message:'',
            isShow:false
        }
    },
    // props:{
    //     message:{
    //         type:String,
    //         default:''
    //     },
    //     isShow:{
    //         type:Boolean,
    //         default:false
    //     }
    // },
    methods:{
        show(message='我是显示的内容',duration=500){
            console.log('hahhhhhhh')
            this.isShow=true;
            this.message=message;
            setTimeout(()=>{
                this.isShow=false
            },duration)
        }
    }
}
</script>

<style>
.Toast{
    position: fixed;
    /* 定位是以元素左上角为原点，故不处于中心位置 */
    left: 50%;
    top: 50%;
    /* 移动自身长度的50%，使其处于中心位置 */
    transform:translate(-50%,-50%);
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: 13px;
    padding: 8px 5px;
    border-radius: 5px;
    z-index: 999;
}
</style>