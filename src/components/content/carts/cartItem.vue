<template>
  <div class="cartItem">
      <div class="itemCheck">
          <check-box @click.native="changeChecked" :isChecked='item.isChecked'></check-box>
      </div>
      <div class="itemImg">
          <img :src="item.img" alt="">
      </div>
      <div class="itemInfo">
          <div class="itemTitle">{{item.title}}</div>
          <div class="itemDesc">{{item.desc}}</div>
          <div class="itemBottom">
              <div class="itemPrice">￥{{item.price}}</div>
              <div class="itemCount">×{{item.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import checkBox from "components/content/checkBox/CheckBox.vue"

export default {
    name:'cartItem',
    components: { checkBox },
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
        }
    },
    methods:{
        changeChecked(){
            this.item.isChecked=!this.item.isChecked
        }
    }
}
</script>

<style>
.cartItem{
    display: flex;
    border-bottom: 5px solid #eee;
    padding: 5px 0px;
}
.itemCheck{
    width: 20px;   
    display: flex;
    justify-content: center;
    align-items: center;
}
.itemImg img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
}
.itemInfo{
    flex: 1;
    padding: 5px 10px;
}
.itemTitle,.itemDesc{  
  width: 200px;
  overflow: hidden;/*溢出隐藏*/
  white-space: nowrap;/*强制不换行*/
  text-overflow: ellipsis;/*文字隐藏方式：以省略号的方式隐藏*/
  margin-bottom: 12px;
}
.itemInfo .itemTitle{
    font-size: 17px;
    color: #333;
}
.itemInfo .itemDesc{
    font-size: 13px;
}
.itemBottom{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}
.itemBottom .itemPrice{
    color: orangered;
}
</style>