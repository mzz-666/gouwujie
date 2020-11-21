<template>
  <div id="main">
    <div v-for="side in Sides" class="box">
      <a :href="side.link">
        <img :src="side.image" alt="">
        <p>{{side.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Side",
    props:{
      Sides:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  #main{
    margin-top: 20px;
    width: 100vw;
    display: flex;
  }
  .box{
    width:25vw;
    text-align: center;
  }
img{
  width: 80%;
}
</style>
