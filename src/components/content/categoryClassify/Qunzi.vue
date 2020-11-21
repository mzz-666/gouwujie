<template>
  <div>
    <CategoryFenlei text="qz" :result-qz="qunzi">
    </CategoryFenlei>
    <router-view></router-view>
  </div>
</template>

<script>
  import CategoryFenlei from "../CategoryFenlei";
  import {getCategory595} from "../../../network/category";

  export default {
    name: "Qunzi",
    components:{
      CategoryFenlei
    },
    data(){
      return{
        qunzi:null
      }
    },
    created() {
      getCategory595().then(res=>{
        console.log(res)
        this.qunzi=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
