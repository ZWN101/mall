<template>
  <div class="navBar">
      <div class="left"><slot name="left"></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navBar{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
}
.left,.right{
    width: 60px;
}
.content{
    flex: 1;
}
</style>