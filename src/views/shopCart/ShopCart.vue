<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物车(0)
      </template>
    </NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  // import {getHomeMultidata,getHomeBeauty} from "../../network/home";
  export default {
    name: "ShopCart",
    components:{
      NavBar
    },
    data(){
      return{
        result:null,
        value:null,
        beauty:null
      }
    }
  }
</script>

<style scoped>
  .home-nav{
    background:var(--color-tint);
    color:#fff;
  }
</style>
