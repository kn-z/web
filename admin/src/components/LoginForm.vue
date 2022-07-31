<template>

  <div class="row no-gutters">
    <div class="col-md-12 order-md-1 bg-white">
      <div class="block-content block-content-full px-lg-4 py-md-4 py-lg-4">
        <div class="mb-3 text-center"><a class="font-size-h1" href="javascript:void(0);">
          <img class="v2board-logo mb-3" src="https://www.kncloud.top/KNcloud.png">
        </a>
          <p class="font-size-sm text-muted mb-3">登录到管理中心</p></div><div class="form-group">
        <input type="text" class="form-control form-control-alt" placeholder="邮箱" v-model="formData.email">
      </div>
        <div class="form-group">
          <input type="password" class="form-control form-control-alt" placeholder="密码" v-model="formData.password">
        </div>
        <div class="form-group mb-0"><button type="submit" class="btn btn-block btn-primary font-w400" @click="inputValid">
          <span><i class="si si-login mr-1"></i>登入</span>
        </button>
        </div>
      </div>
    </div>
    <AlertBox :alertTitle="alertTitle" :alertMsg="alertMsg" v-show="isShow" @closeAlert="closeAlert"/>
  </div>
</template>

<script>
import AlertBox from "@/components/AlertBox";

const validateEmail = (email) => {
  return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


export default {
  name: "LoginForm",
  components:{
    AlertBox
  },
  data(){
    return{
      formData:{
        email:'',
        password:'',
      },
      alertTitle:'无效请求',
      alertMsg:'',
      isShow:false
    }
  },
  computed:{

  },
  methods:{
    inputValid(){
      clearInterval(this.timer)
      let email = this.formData.email
      let passwd = this.formData.password

      if (!email.trim()) this.alertMsg= "邮箱不能为空"
      else if (!validateEmail(email)) this.alertMsg= "请输入正确邮箱"
      else if (!passwd.trim()) this.alertMsg= "密码不能为空"
      else if (passwd.trim().length < 8) this.alertMsg= "密码必须大于 8 个字符"
      else {
        const res =  this.$http.post('login',this.formData)
        console.log(res)
        return 0
      }


      this.isShow = true
      this.timer = setInterval(()=>{
        this.isShow = false
        clearInterval(this.timer)
      },3000)
    },

    closeAlert(){
      console.log(this.isShow)
    }
  }
}
</script>

<style scoped>

</style>