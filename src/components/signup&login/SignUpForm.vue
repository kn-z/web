<template>
  <div class="row no-gutters">
    <div class="col-md-12 order-md-1 bg-white">
      <div class="block-content block-content-full px-lg-4 py-md-4 py-lg-4">
        <div class="mb-3 text-center"><a class="font-size-h1" href="javascript:void(0);"><img class="v2board-logo mb-3"
                                                                                              src="https://api.kncloud.top/KNcloud.png"></a>
          <p class="font-size-sm text-muted mb-3">異世界へ行こう</p></div>
        <div>
          <div class="form-group v2board-email-whitelist-enable"><input type="text"
                                                                        class="form-control form-control-alt"
                                                                        placeholder="邮箱"
                                                                        v-model="formData.email">
            <select class="form-control form-control-alt" @change="getEmailType">
              <option v-for="item in emailTypes.emailList" :value="item">{{ item }}</option>
            </select>
          </div>
          <div class="form-group form-row">
            <div class="col-9"><input type="text" class="form-control form-control-alt" placeholder="邮箱验证码"
                                      v-model="formData.verify"></div>
            <div class="col-3">
              <button type="submit" class="btn btn-block btn-primary font-w400" @click="sendEmail"
                      :disabled="smBtn.isDisable">
                {{ smBtn.value }}
                <i
                    aria-label="图标: loading"
                    >
                  <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-icon="loading" width="1em"
                       height="1em" fill="currentColor" aria-hidden="true" v-show="smBtn.isSending">
                    <path
                        d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                  </svg>
                </i>
              </button>
            </div>
          </div>
          <div class="form-group"><input type="password" class="form-control form-control-alt" placeholder="密码"
                                         v-model="formData.password"></div>
          <div class="form-group"><input type="password" class="form-control form-control-alt" placeholder="确认密码"
                                         v-model="formData.rePassword"></div>
          <div class="form-group">
            <div class="custom-control custom-checkbox custom-control-primary"><input type="checkbox"
                                                                                      class="custom-control-input"
                                                                                      v-model="formData.agree"
                                                                                      style="z-index: 100;"><label
                class="custom-control-label">
              <div>我已阅读并同意 <a target="_blank" href="https://www.1008866.xyz/tos">服务条款</a></div>
            </label></div>
          </div>
          <div class="form-group mb-0">
            <button type="submit" class="btn btn-block btn-primary font-w400" @click="signUp"
                    :disabled="!formData.agree" v-show=!isLoading><span><i
                class="si si-emoticon-smile mr-1"></i>注册</span></button>
            <button type="submit" class="btn btn-block btn-primary font-w400" disabled="" v-show=isLoading><i
                aria-label="icon: loading"
                >
              <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-icon="loading" width="1em"
                   height="1em" fill="currentColor" aria-hidden="true">
                <path
                    d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
              </svg>
            </i></button>
          </div>
        </div>
      </div>
    </div>
    <TipBox :tipTitle="tipBox.tipTitle" :tipMsg="tipBox.tipMsg" :type="tipBox.type" v-show="tipBox.isShow" @closeAlert="closeAlert"/>
  </div>
</template>

<script>
import TipBox from "@/components/tools/TipBox";

export default {
  name: "SignUpForm",
  components: {
    TipBox,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
        rePassword: '',
        verify: '',
        agree: false,
      },
      tipBox:{
        tipTitle: null,
        tipMsg: null,
        type: null,
        isShow: false,
      },
      smBtn:{
        value: "发送",
        isSending: false,
        isDisable: false,
      },
      emailTypes:{
        emailList: ["@gmail.com", "@qq.com"],
        emailType: null,
      },
      isLoading: false,
    }
  },
  methods: {
    getEmailType(event) {
      this.emailTypes.emailType = event.target.value
    },

    inputValid() {
      let email = this.formData.email
      let passwd = this.formData.password
      let rePasswd = this.formData.rePassword
      let verify = this.formData.verify
      let status = 0

      this.tipBox.tipTitle = "无效请求"

      if (!email.trim() || email.includes('@') || email.includes('.')) this.tipBox.tipMsg = "邮箱格式不正确"
      else if (!passwd.trim()) this.tipBox.tipMsg = "密码不能为空"
      else if (rePasswd !== passwd) this.tipBox.tipMsg = "两次密码输入不同"
      else if (passwd.trim().length < 8) this.tipBox.tipMsg = "密码必须大于 8 个字符"
      else if (!verify.trim()) this.tipBox.tipMsg = "邮箱验证码不能为空"
      else status = 1
      return status
    },

    async signUp() {
      this.changeLoading()
      if (this.inputValid()) {
        const {data: res} = await this.$http.post('user/create', {
          "email": this.formData.email + this.emailTypes.emailType,
          "password": this.formData.password,
          "verify": this.formData.verify
        })
        if (res.status !== 200) {
          this.tipBox.tipMsg = res.message
          this.changeLoading()
        } else {
          this.setTipInfo(1,"注册成功请登录")
          setTimeout(() => {
            this.$router.push('login')
          }, 3000)
        }
      }
      else {
        this.tipBox.type = false
        this.changeLoading()
      }
      this.showTipMsg(this.tipBox.tipMsg)
    },


    startTimer() {
      this.smBtn.value = 60
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.smBtn.value > 1) {
          this.smBtn.value--
        } else {
          this.smBtn.isDisable = false
          this.smBtn.value = "发送"
        }
      }, 1000); // 注意: 第一个参数为方法名的时候不要加括号;
    },

    async sendEmail() {
      let email = this.formData.email
      let emailType = this.emailTypes.emailType
      let status = 0
      if (!email.trim() || email.includes('@') || email.includes('.')) {
        this.setTipInfo(0,"邮箱格式不正确")
      }
      else {
        this.smBtn.value = null
        this.smBtn.isDisable = true
        this.changeSending()
        const {data: res} = await this.$http.post('verify', {
          "email": email + emailType,
        })
        if (res.status !== 200){

          return
        }
        this.changeSending()
        status = 1
        if (res.status === 200) this.setTipInfo(1,"如果没有收到验证码请检查垃圾箱")
        else this.setTipInfo(1,"错误系统")
      }
      this.showTipMsg(this.tipBox)
      if (status === 1) this.startTimer()
    },

    showTipMsg(tip) {
      clearInterval(this.tipTimer)
      if (tip.tipMsg){
        this.tipBox.tipMsg = tip.tipMsg
      }
      if (tip.type){
        this.tipBox.type = tip.type
      }
      if (tip.tipTitle){
        this.tipBox.tipTitle = tip.tipTitle
      }
      this.tipBox.isShow = true
      this.tipTimer = setInterval(() => {
        this.tipBox.isShow = false
        clearInterval(this.tipTimer)
      }, 3000)
    },

    closeAlert() {
      this.tipBox.isShow = false
    },
    changeLoading() {
      this.isLoading = !this.isLoading
    },
    changeSending() {
      this.smBtn.isSending = !this.smBtn.isSending
    },
    setTipInfo(type,msg){
      if (!type){
        this.tipBox.type = false
        this.tipBox.tipTitle = "无效请求"
      }
      else {
        this.tipBox.type = type
        this.tipBox.tipTitle = "请求成功"
      }
      this.tipBox.tipMsg = msg
    }
  },

  beforeMount() {
    this.emailTypes.emailType = this.emailTypes.emailList[0];
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },
}
</script>

<style scoped>

</style>
