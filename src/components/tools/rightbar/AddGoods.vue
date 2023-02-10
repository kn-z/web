<template>
  <div class="ant-drawer-body">
    <div>
      <div>
        <div class="form-group"><label for="example-text-input-alt">商品名称</label><input placeholder="请输入套餐名称"
                                                                                           type="text" class="ant-input"
                                                                                           value=""></div></div>
      <div class="ant-row" style="margin-left: -5px; margin-right: -5px;">
        <div class="ant-col ant-col-md-12" style="padding-left: 5px; padding-right: 5px;">
          <div class="form-group"><label for="example-text-input-alt">商品价格</label><span
              class="ant-input-group-wrapper"><span class="ant-input-wrapper ant-input-group"><input type="text"
                                                                                                     class="ant-input"
                                                                                                     value=""><span
              class="ant-input-group-addon">¥</span></span></span></div>
        </div>
        <div class="ant-col ant-col-md-12" style="padding-left: 5px; padding-right: 5px;">
          <div class="form-group"><label for="example-text-input-alt">重置包</label><span
              class="ant-input-group-wrapper"><span class="ant-input-wrapper ant-input-group"><input type="text"
                                                                                                     class="ant-input"
                                                                                                     value=""><span
              class="ant-input-group-addon">¥</span></span></span></div>
        </div>
        <div>
          <div class="form-group"><label for="example-text-input-alt">图片url</label><input placeholder="请输入套餐名称"
                                                                                             type="text" class="ant-input"
                                                                                             value=""></div></div>
        <div class="form-group"><label for="example-text-input-alt">商品描述</label><textarea rows="4"
                                                                                              placeholder="请输入套餐描述，支持HTML"
                                                                                              class="ant-input"></textarea>
        </div>
      </div>
    </div>
    <div class="v2board-drawer-action" style="float: right">
      <button @click=close type="button" class="ant-btn" style="margin-right: 8px;"><span>取 消</span></button>
      <button @click=submit v-show="!isSubmit" type="button" class="ant-btn ant-btn-primary"><span>提 交</span>
      </button>
      <button v-show="isSubmit" type="button" class="ant-btn ant-btn-primary ant-btn-loading"
              ant-click-animating-without-extra-node="false"><i aria-label="图标: loading"
                                                                class="anticon anticon-loading">
        <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-icon="loading" width="1em"
             height="1em" fill="currentColor" aria-hidden="true">
          <path
              d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
        </svg>
      </i><span>提 交</span></button>
    </div>
  </div>
  </div>
</template>

<script>

const validateEmail = (email) => {
  return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export default {
  name: "AddGoods",
  data() {
    return {
      id: '',
      isSubmit: false,
      user: {
        email: '', role: 0, password: '', content: ''
      },
    }
  },
  methods: {
    changRole() {
      this.user.role = 1 - this.user.role
    },
    async submit() {
      this.isSubmit = true
      if (this.user.email === '' || !validateEmail(this.user.email)) {
        let tip = {
          tipTitle: "请求失败",
          tipMsg: "请输入有效邮箱",
          type: false,
        }
        this.$bus.$emit('showTipMsg', tip)
        this.isSubmit = false
        return
      }
      const {data: res} = await this.$http.post('user/create', {
        "email": this.user.email,
        "role": this.user.role,
        "password": this.user.password,
        "content": this.user.content,
      })
      if (res.status !== 200) {
        let tip = {
          tipTitle: "请求失败",
          tipMsg: res.message,
          type: false,
        }
        this.$bus.$emit('showTipMsg', tip)
        this.isSubmit = false
        return
      }
      this.isSubmit = false
      this.close()
      this.$bus.$emit('reloadUserList', 0)
    },
    close() {
      this.$bus.$emit('closeRB')
    }
  },
  mounted() {
    this.$bus.$on('clearAU', () => {
      this.user = {
        email: '', role: 0, password: '', content: ''
      }
    })
  }
}
</script>

<style scoped>

</style>