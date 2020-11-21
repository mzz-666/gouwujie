<template>
  <div>
    <CategoryFenlei text="sy" :result-sy="shangyi">
    </CategoryFenlei>
    <router-view></router-view>
  </div>
</template>

<script>
  import CategoryFenlei from "../CategoryFenlei";
  import {getCategory582} from "../../../network/category";

  export default {
    name: "Shangyi",
    components:{
      CategoryFenlei
    },
    data(){
      return{
        shangyi:null
      }
    },
    created() {
      getCategory582().then(res=>{
        console.log(res)
        this.shangyi=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
