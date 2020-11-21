<template>
  <div>
    <HomeFenlei text="pop1" :Pop1="Pop1"></HomeFenlei>
  </div>
</template>

<script>

  import HomeFenlei from "../HomeFenlei";
  import {getHomePop1} from "../../../network/home";

  export default {
    name: "Pop",
    components:{
      HomeFenlei
    },
    data(){
      return{
        Pop1:null
      }
    },
    created() {
      getHomePop1().then(res=>{
        console.log(res)
        this.Pop1=res.data.list
      })
    }
  }
</script>
