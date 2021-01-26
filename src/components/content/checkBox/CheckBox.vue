<template>
  <div class="checkBox" :class="{checked:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="" v-show="isChecked">
  </div>
</template>

<script>
export default {
    name:'CheckBox',
    data(){
        return {
            // isChecked:true
        }
    },
    props:{
        isChecked:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    methods:{
    }
}
</script>

<style>
.checkBox{
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 1px solid rgb(139, 139, 139);

}
.checked{
    border: 1px solid orangered;
    background-color: orangered;
}
</style>