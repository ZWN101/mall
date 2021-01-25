<template>
<div class="bottomBar">
    <div class="barItem barLeft">
        <div>
            <i class="icon service"></i>
            <div>客服</div>
        </div>
        <div>
            <i class="icon shop"></i>
            <div>店铺</div>
        </div>
        <div>
            <i class="icon select"></i>
            <div>收藏</div>
        </div>
    </div>
    <div class="barItem barRight">
        <div class="addCart">加入购物车</div>
        <div class="buy">立即购买</div>
    </div>
</div>
</template>

<script>
export default {
    name:'DetailBottomBar'
}
</script>

<style>
.bottomBar{
    width: 100%;
    height: 49px;
    background-color: #fff;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: flex;
    text-align: center;
}
.barItem{
    flex: 1;
    display: flex;
}
.barLeft{
    display: flex;
    /* background-color: darkkhaki; */
    font-size: 13px;
}
.barItem>div{
    flex: 1;    
}
.barLeft .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
    background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;  
}
.barLeft .service{
    background-position: 0px -54px;
}
.barLeft .shop{
    background-position: 0px -98px;
}
.barRight{
    /* background-color: chocolate; */
    line-height: 49px;
    font-size: 14px;
    color: black;
}
.barRight .addCart{
    background-color: #dd5621;
}
.barRight .buy{
    background-color: #ffc400;
}
</style>