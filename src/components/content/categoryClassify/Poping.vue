<template>
  <div>
<!--    传数据，前面没有冒号，代表传递的类型是String，例如：text="pop"；有冒号，传过去的是数组，例如：:result-pop="poping"-->
    <CategoryFenlei text="pop" :result-pop="poping"></CategoryFenlei>
    <router-view></router-view>
  </div>
</template>

<script>
  import CategoryFenlei from "../CategoryFenlei";
  import {getCategory3627,} from "../../../network/category";

  export default {
    name: "Poping",
    components:{
      CategoryFenlei
    },
    data(){
      return{
        poping:null
      }
    },
    created() {
      getCategory3627().then(res=>{
        console.log(res)
        this.poping=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
