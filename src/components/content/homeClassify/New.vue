<template>
  <div>
    <HomeFenlei text="new1" :New1="New1"></HomeFenlei>
  </div>
</template>

<script>

  import HomeFenlei from "../HomeFenlei";
  import {getHomeNew1} from "../../../network/home";

  export default {
    name: "New",
    components:{
      HomeFenlei
    },
    data(){
      return{
        New1:null
      }
    },
    created() {
      getHomeNew1().then(res=>{
        console.log(res)
        this.New1=res.data.list
      })
    }
  }
</script>
