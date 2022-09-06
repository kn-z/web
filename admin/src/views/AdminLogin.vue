<template>
  <div id="page-container">
    <main id="main-container">
      <div class="v2board-background" style="background-image:url(&quot;https://api.kncloud.top/random.php&quot;);"></div>
      <div class="no-gutters v2board-auth-box"><div class="" style="max-width: 450px; width: 100%; margin: auto;">
        <div class="mx-2 mx-sm-0">
          <div class="block block-rounded block-transparent block-fx-pop w-100 mb-0 overflow-hidden bg-image" style="box-shadow: rgba(0, 0, 0, 0.05) 0px 0.5rem 2rem;">
            <LoginForm :title = title :type = type></LoginForm>
            <LoginFooter :type = type></LoginFooter>
          </div>
        </div>
      </div>
      </div>
    </main>
  </div>
</template>

<script>
import LoginFooter from "@/components/LoginFooter";
import LoginForm from "@/components/LoginForm"

export default {
  name: "AdminLogin",
  components:{
    LoginFooter,
    LoginForm,
  },
  data(){
    return{
      title: '登录到管理中心',
      type: 0
    }
  }
}
</script>

<style scoped>

</style>