<template>
  <div>
<!--    正在流行-->
    <div v-if="text=='pop'">
      <div class="box">
        <ul  v-for="img in resultPop">
          <li>
            <a :href="img.link">
              <img :src="img.image" alt="">
              <p class="text">{{img.title}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
<!--上衣-->
    <div v-else-if="text=='sy'">
      <div class="box">
        <ul  v-for="img in resultSy">
          <li>
            <a :href="img.link">
              <img :src="img.image" alt="">
              <p class="text">{{img.title}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
<!--裙子-->
    <div v-else-if="text=='qz'">
      <div class="box">
        <ul  v-for="img in resultQz">
          <li>
            <a :href="img.link">
              <img :src="img.image" alt="">
              <p class="text">{{img.title}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
<!--裤子-->
    <div v-else-if="text=='kz'">
      <div class="box">
        <ul  v-for="img in resultKz">
          <li>
            <a :href="img.link">
              <img :src="img.image" alt="">
              <p class="text">{{img.title}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
<!--内衣-->
    <div v-else-if="text=='ny'">
      <div class="box">
        <ul  v-for="img in resultNy">
          <li>
            <a :href="img.link">
              <img :src="img.image" alt="">
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
    name: "CategoryFenlei",
    props:{
      text:{
        type:String
      },
      resultPop:{
        type:Array
      },
      resultSy:{
        type:Array
      },
      resultQz:{
        type:Array
      },
      resultKz:{
        type:Array
      },
      resultNy:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 75vw;
    height: 100%;
    margin-top: 44px;
    float: right;
  }
  .box ul{
    list-style: none;
    width: 100%;
    height: auto;
    text-align: center;
  }
  .box ul li{
    width: 50%;
    height: 25vh;
    float: left;
    /*background: #ffccbb;*/
    text-overflow: ellipsis;
  }
  .box img{
    border-radius: 10px;
    width: 80%;
    height: 70%;
  }
  .box .text{
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
