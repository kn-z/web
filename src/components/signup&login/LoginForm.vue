<template>
  <div class="row no-gutters">
    <div class="col-md-12 order-md-1 bg-white">
      <div class="block-content block-content-full px-lg-4 py-md-4 py-lg-4">
        <div class="mb-3 text-center"><a class="font-size-h1" href="javascript:void(0);">
          <img class="v2board-logo mb-3" src="https://www.kncloud.top/KNcloud.png">
        </a>
          <p class="font-size-sm text-muted mb-3">{{ title }}</p></div>
        <div class="form-group">
          <input type="text" class="form-control form-control-alt" placeholder="邮箱" v-model="formData.email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control form-control-alt" placeholder="密码" v-model="formData.password">
        </div>
        <div class="form-group mb-0">
          <button type="submit" class="btn btn-block btn-primary font-w400" @click="inputValid" @keyup.enter="inputValid" v-show=!isLoading>
            <span><i class="si si-login mr-1"></i>登入</span>
          </button>
          <button type="submit" class="btn btn-block btn-primary font-w400" disabled="" v-show=isLoading><i aria-label="type: loading"
                                                                                           >
            <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-type="loading" width="1em"
                 height="1em" fill="currentColor" aria-hidden="true">
              <path
                  d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
            </svg>
          </i></button>
        </div>
      </div>
    </div>
    <TipBox :tipTitle="tipBox.tipTitle" :tipMsg="tipBox.tipMsg" v-show="tipBox.isShow" @closeAlert="closeAlert"/>
  </div>
</template>

<script>
import TipBox from "@/components/tools/TipBox";

const validateEmail = (email) => {
  return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


export default {
  name: "LoginForm",
  components: {
    TipBox
  },
  props: ["title", "loginType"],

  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      tipBox:{
        tipTitle: null,
        tipMsg: null,
        type: null,
        isShow: false,
      },
      isLoading: false
    }
  },

  methods: {
    inputValid() {
      let email = this.formData.email
      let passwd = this.formData.password

      this.tipBox.tipTitle = "无效请求"
      if (!email.trim()) this.tipBox.tipMsg = "邮箱不能为空"
      else if (!validateEmail(email)) this.tipBox.tipMsg = "请输入正确邮箱"
      else if (!passwd.trim()) this.tipBox.tipMsg = "密码不能为空"
      else if (passwd.trim().length < 8) this.tipBox.tipMsg = "密码必须大于 8 个字符"
      else return this.Login()

      this.showTipMsg()
    },

    async Login() {
      this.changeLoading()
      let url = "login"
      let push = "goods"
      if (this.loginType === 1){
        url = "admin"
        push = "backend/dashboard"
      }
      const {data: res} = await this.$http.post(url, {
        "email": this.formData.email,
        "password": this.formData.password
      })
      if (res.status !== 200){
        this.changeLoading()
        return this.showTipMsg(res.message)
      }
      localStorage.setItem('token', res.token)
      await this.$router.push(push)
    },

    showTipMsg() {
      clearInterval(this.tipTimer)
      this.tipBox.isShow = true
      this.tipTimer = setInterval(() => {
        this.tipBox.isShow = false
        clearInterval(this.tipTimer)
      }, 3000)
    },

    setTipInfo(type,msg){
      if (!type){
        this.tipBox.type = false
        this.tipBox.tipTitle = "请求无效"
      }
      else {
        this.tipBox.type = true
        this.tipBox.tipTitle = "请求成功"
      }
      this.tipBox.tipMsg = msg
    },

    closeAlert() {
      this.tipBox.isShow = false
    },

    changeLoading(){
      this.isLoading = !this.isLoading
    }
  }
}
</script>

<style scoped>

</style>
