<template>
  <div>
    <CategoryFenlei text="ny" :result-ny="neiyi">
    </CategoryFenlei>
    <router-view></router-view>
  </div>
</template>

<script>
  import CategoryFenlei from "../CategoryFenlei";
  import {getCategory598} from "../../../network/category";

  export default {
    name: "Neiyi",
    components:{
      CategoryFenlei
    },
    data(){
      return{
        neiyi:null
      }
    },
    created() {
      getCategory598().then(res=>{
        console.log(res)
        this.neiyi=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
