<template>
  <div>
    <HomeFenlei text="sell1" :Sell1="Sell1"></HomeFenlei>
  </div>
</template>

<script>

  import HomeFenlei from "../HomeFenlei";
  import {getHomeSell1} from "../../../network/home";

  export default {
    name: "Sell",
    components:{
      HomeFenlei
    },
    data(){
      return{
       Sell1:null
      }
    },
    created() {
      getHomeSell1().then(res=>{
        console.log(res)
        this.Sell1=res.data.list
      })
    }
  }
</script>
