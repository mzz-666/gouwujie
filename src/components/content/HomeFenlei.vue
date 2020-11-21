<template>
  <div>
    <!--  流行-->
    <div v-if="text=='pop1'">
      <div class="box">
        <ul  v-for="img in Pop1">
          <li>
            <a :href="img.link">
              <img :src="img.show.img" alt="">
              <p class="text">{{img.title}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
<!--    热销-->
    <div v-if="text=='sell1'">
      <div class="box">
        <ul  v-for="img in Sell1">
          <li>
            <a :href="img.link">
              <img :src="img.show.img" alt="">
              <p class="text">{{img.title}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
<!--    上新-->
    <div v-if="text=='new1'">
      <div class="box">
        <ul  v-for="img in New1">
          <li>
            <a :href="img.link">
              <img :src="img.show.img" alt="">
              <p class="text">{{img.title}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "HomeFenlei",
    props:{
      text:{
        type:String
      },
      Pop1:{
        type:Array
      },
      New1:{
        type:Array
      },
      Sell1:{
        type:Array
      },
    }
  }
</script>

<style scoped>
  .box{
    width: 100vw;
    /*margin-top: -20px;*/
  }
  .box ul{
    list-style: none;
    width: 100%;
    height: auto;
    text-align: center;
  }
  .box ul li{
    width: 44%;
    height: 40vh;
    margin-left: 4%;
    margin-top: 8%;
    float: left;
    text-overflow: ellipsis;
  }
  .box img{
    border-radius: 10px;
    width: 100%;
    height: 95%;
  }
  .box .text{
    width: 44vw;
    height: 20px;
    margin-top: 5px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
