<template>
  <div class="cartList">
      <cart-item v-for="item in cartItems" :item='item'></cart-item>
  </div>
</template>

<script>
import cartItem from 'components/content/carts/cartItem';

export default {
    name:'cartList',
    data(){
        return {
            cartItems:this.$store.state.cartItems
            // cartItems:[
            //     {
            //         count:1,
            //         desc:'2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装',
            //         iid:"1m70y5k",
            //         img:'//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg',
            //         price:'59.00',
            //         title:'2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装'
            //     }
            // ]
        }
    },
    components:{
        cartItem
    }
}
</script>

<style>

</style>