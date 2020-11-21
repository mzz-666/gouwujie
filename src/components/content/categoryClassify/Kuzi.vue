<template>
  <div>
    <CategoryFenlei text="kz" :result-kz="kuzi">
    </CategoryFenlei>
    <router-view></router-view>
  </div>
</template>

<script>
  import CategoryFenlei from "../CategoryFenlei";
  import {getCategory596} from "../../../network/category";

  export default {
    name: "Kuzi",
    components:{
      CategoryFenlei
    },
    data(){
      return{
        kuzi:null
      }
    },
    created() {
      getCategory596().then(res=>{
        console.log(res)
        this.kuzi=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
