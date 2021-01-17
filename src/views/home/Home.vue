<template>
  <div>
      <nav-bar class="homeNav">
        <div slot="content">购物街</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
    name:'Home'
}
</script>

<style>
.homeNav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>