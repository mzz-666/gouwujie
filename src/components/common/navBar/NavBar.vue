<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">购物街</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
}
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
    color:#fff;
    text-align: center;
  }
</style>
