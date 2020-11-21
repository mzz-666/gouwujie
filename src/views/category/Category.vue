<template>
  <div class="category">
    <NavBar class="home-nav">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
    <div class="fenlei">
      <ul>
        <li  v-for="item in Ttile">
          <router-link :to="/category/+item.sort" active-class="active">
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import {getCategory} from "../../network/category";
  export default {
    //分类
    name: "Category",
    components:{
      NavBar
    },
    data(){
      return{
        Ttile:null
      }
    },
    created() {
      getCategory().then(res=>{
        console.log(res)
        this.Ttile = res.data.category.list
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background:var(--color-tint);
    color:#fff;
    z-index: 99;
    position: fixed;
  }
  .fenlei{
    width: 25vw;
    position: fixed;
    z-index: 1;
    height: 100%;
    margin-top: 44px;
    background: #fcb;
  }
  .fenlei ul{
    width: 100%;
    height:100%;
    list-style: none;
    text-align: center;
  }
  .fenlei ul li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color:#fff;
    background: #ff8198;
  }
  .active{
    position: relative;
    color:#fff;
  }
</style>
