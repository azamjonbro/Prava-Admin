<template >
 <router-view></router-view>
</template>
<script>
export default {
  mounted(){
   let token = localStorage.getItem("token");
   if(!token){
    this.$router.push("/login") 
   }
   else{
    this.$router.push("/dashboard")
     
   }
  },
}
</script>
<style >
  
</style>