<template>
  <div>
    <LoginBackground/>
  </div>
</template>

<script>
import LoginBackground from "@/components/LoginBackground";


export default {
  name: "AdminLogin",
  components: {
    LoginBackground,
  },
  data(){
    return{
      email:'',
      password:''
    }
  },
}

</script>

<style scoped>

</style>