<template>
<div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in image">
          <a :href="img.link">
            <img :src="img.image" alt="">
          </a>
        </div>
    </div>
  </div>
</div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    //因为v-fpr有延迟，用update可以在循环之前加载，如果用mounted，图片不会轮播
    updated() {
      let mySwiper = new Swiper('.swiper-container',{
        autoplay:3000,
        loop:true
      })
    },
    //在子组件这里通过props，使用image接受父组件传过来的数据
    props: {
      image:{
        type:Array
      }
    }
  }
</script>

<style scoped>
.swiper-container{
  width: 100vw;
  /*height: 300px;*/
  margin-top: 44px;
}
.swiper-slide img{
  width: 100%;
  height: auto;
}
</style>
