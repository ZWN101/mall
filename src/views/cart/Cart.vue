<template>
  <div class="cart">
    <nav-bar class="cartNavBar">
      <div slot="content">购物车({{cartItemLength}})</div>
      <!-- <div slot="content">购物车({{$store.getters.cartItemLength}})</div> -->
    </nav-bar>
    <scroll class="cartScroll" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from 'components/content/carts/cartList.vue';
import CartBottom from './childComps/CartBottom.vue';

import Scroll from 'components/common/scroll/Scroll.vue';

import {mapGetters} from 'vuex';

export default {
    name:'Cart',
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottom
    },
    computed:{
      //mapGetters将vuex里的getters转化为computed
      //1
      ...mapGetters(['cartItemLength'])
      //2
      // ...mapGetters({
      //   length:'cartItemLength'
      // })
    },
    activated(){
      this.$refs.scroll.refresh();
    }

}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.cartNavBar{
  background-color: var(--color-tint);
  color: #fff;
}
.cartScroll{
  height: calc(100% - 128px);
  overflow: hidden;
  background-color: #fff;
}
</style>