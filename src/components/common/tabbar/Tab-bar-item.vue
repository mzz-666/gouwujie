<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="slot-img"></slot>
    <slot v-else name="slot-active-img"></slot>
    <div :style="activeStyle">
      <slot name="slot-text"></slot>
    </div>
  </div>
</template>
<!--具名插槽，App.vue里的TabBarItem里所有内容分别替换这里的slot-img与slot-text-->

<script>
  export default {
    name: "tab-bar-item",
    data(){
      return{
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'deepSkyblue'
      }
    },
    methods:{
      itemClick(){
        console.log("1")
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  /*@import "../../assets/css/base.css";*/
  .tab-bar-item{
    text-align: center;
    height: 49px;/*移动端底部导航的固定像素，一般都是px*/
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>
