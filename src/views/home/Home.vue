<template>
  <div class="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
<!--    轮播图-->
    <SwiperA :image="result">
    </SwiperA>
<!--    圆图片-->
    <Side :Sides="value"></Side>
    <Side :Sides="value"></Side>
<!--    分类按钮-->
    <div class="fenlei">
      <ul>
        <li v-for="item in beauty">
          <router-link :to="/home/+item.sort" active-class="active">
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
  import {getHomeMultidata,getHomeBeauty} from "../../network/home";
  import SwiperA from '../../components/common/SwiperA'
  import Side from "../../components/common/Side";
  export default {
    name: "Home",
    components:{
      NavBar,SwiperA,Side
    },
    data(){
      return{
        result:null,
        value:null,
        beauty:null
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        console.log(res)
        this.result=res.data.banner.list,
          this.value=res.data.recommend.list
      }),
        getHomeBeauty().then(res=>{
          console.log(res)
          this.beauty=res.data.filter.list
        })
    }
  }
</script>

<style scoped>
.home-nav{
  background:var(--color-tint);
  color:#fff;
}
  .fenlei{
    width: 100vw;
    height: 10px;
  }
.fenlei ul{
  text-align: center;
  list-style: none;
  margin-top: 20px;
}
.fenlei ul li{
  width: 33vw;
    display: inline-block;
  }
.active span{
}
  .active{
    position: relative;
    color:#ff5777;
  }
  .active:before{
    content: '';
    width: 100%;
    height: 4px;
    position: absolute;
    left:0;
    bottom: -8px;
    background: #ff5777;
    border-radius: 2px;
  }
</style>
