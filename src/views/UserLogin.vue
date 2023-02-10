<template>
  <div id="page-container">
    <main id="main-container">
      <div class="v2board-background"
           style="background-image:url(&quot;https://api.kncloud.top/random.php&quot;);"></div>
      <div class="no-gutters v2board-auth-box">
        <div class="" style="max-width: 450px; width: 100%; margin: auto;">
          <div class="mx-2 mx-sm-0">
            <div class="block block-rounded block-transparent block-fx-pop w-100 mb-0 overflow-hidden bg-image"
                 style="box-shadow: rgba(0, 0, 0, 0.05) 0px 0.5rem 2rem;">
              <LoginForm :title=title :loginType=loginType></LoginForm>
              <LoginFooter :loginType=loginType></LoginFooter>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import LoginFooter from "@/components/signup&login/LoginFooter";
import LoginForm from "@/components/signup&login/LoginForm"

export default {
  name: "UserLogin",
  components: {
    LoginForm,
    LoginFooter,
  },
  data() {
    return {
      title: '異世界へ行こう',
      loginType: 0
    }
  },
  methods: {
    async checkToken() {
      if (localStorage.getItem('token')) {
        const {data: res} = await this.$http.post('user/info')
        if (res.status !== 200) {
          return
        } else {
          this.$bus.$emit('loginType', 1)
          await this.$router.push('goods')
        }
      }
    }
  },
  mounted() {
    this.checkToken()
  }
}
</script>

<style scoped>

</style>
