<template>
  <div class="content content-full">
    <div class="spinner-grow text-primary" role="status" v-show="isLoading"><span class="sr-only">Loading...</span>
    </div>
    <div class="row" id="cashier" v-show="!isLoading">
      <div class="col-md-8 col-sm-12">
        <div class="block block-link-pop block-rounded py-3" style="background-color: rgb(255, 255, 255);"><h4
            class="mb-0 px-3">{{ good.title }}</h4>
          <div class="v2board-plan-content">单价¥ {{ good.price }}</div>
          <div class="v2board-plan-content">库存 {{ good.stock }}</div>
        </div>
        <div class="block block-rounded js-appear-enabled">
          <div class="block-header block-header-default"><h3 class="block-title">商品描述</h3>
            <div class="block-options"></div>
          </div>
          <div data-v-42f4bad4="" class="ant-modal-body">
            <div data-v-42f4bad4="" id="qrcode">
              <canvas width="250" height="250" style="display: none;"></canvas>
              <img object-fit="contain" alt="pic" style="display: block;" :src=good.image>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="block block-link-pop block-rounded  px-3 py-3 mb-2 text-light" style="background: rgb(53, 56, 61);">
          <input :disabled=isLogin type="text" class="form-control v2board-input-coupon p-0"
                 :placeholder="isLogin ? '用户已登录' : '请输入邮箱查询'"
                 v-model="formData.email">
          <div>
          </div>
        </div>
        <div class="block block-link-pop block-rounded  px-3 py-3 text-light" style="background: rgb(53, 56, 61);"><h4
            class="text-light mb-3">订单总额</h4>
          <div class="row no-gutters pb-3" style="border-bottom: 1px solid rgb(100, 102, 105);">
            <div class="col-md-12" style="font-size:20px;">¥ {{ good.price }} x

              <button type="button" class="btn btn-primary" style="float:right;"
                      @click="formData.buyAmount = parseInt(formData.buyAmount) + 1"><span><i
                  class="fa fa-plus"></i></span>
              </button>
              <input type="text" class="v2board-input-coupon col-md-3 text-center" maxlength="2"
                     style="float:right; width: 100px;" onfocus="this.select();"
                     v-model="formData.buyAmount" onkeyup="this.value=this.value.replace(/\D|^/g,'')">
              <button type="button" class="btn btn-primary ml-2" style="float:right;"
                      @click="parseInt(formData.buyAmount) > 1 ? formData.buyAmount = parseInt(formData.buyAmount) - 1 : null"><span><i
                  class="fa fa-minus"></i></span>
              </button>
            </div>

          </div>
          <div class="pt-3" style="color: rgb(100, 102, 105);">总计</div>
          <h1 class="text-light mt-3 mb-3">¥ {{ totalAmount }}</h1>
          <button type="button" class="btn btn-block btn-primary" @click="createOrder" v-show=!isSubmit><span><i
              class="far fa-check-circle"></i> 下单</span>
          </button>
          <button type="button" class="btn btn-block btn-primary" disabled="" v-show=isSubmit><span><i
              aria-label="type: loading"
          >
            <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-type="loading" width="1em"
                 height="1em" fill="currentColor" aria-hidden="true">
              <path
                  d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
            </svg>
          </i> 下单</span>
          </button>
        </div>
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
  // inject: ['reload'],
  name: "BuyPage",
  data() {
    return {
      formData: {
        email: "",
        goodId: null,
        buyAmount: 1,
      },
      good: 0,
      isLoading: true,
      isLogin: false,
      isSubmit: false,
    }
  },

  computed: {
    totalAmount() {
      return this.formatMoney(this.good.price * this.formData.buyAmount)
    }
  },

  watch: {
    $route() {
      if (this.$route.fullPath.indexOf("/goods/") !== -1) {
        this.isLoading = true
        this.getGood()
      }
    },
    'formData.buyAmount'(newAge) {
      if (!newAge || newAge === '0') {
        this.formData.buyAmount = 1
      }
    },
  },

  methods: {
    formatMoney(x) {
      let f = parseFloat(x);
      if (isNaN(f)) {
        return false;
      }
      f = Math.round(x * 100) / 100;
      let s = f.toString();
      let rs = s.indexOf('.');
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + 2) {
        s += '0';
      }
      return s;
    },

    async getGood() {
      this.formData.goodId = this.$route.fullPath.split('/')[2]
      const {data: res} = await this.$http.get("good/" + this.formData.goodId)
      this.good = res.data
      this.good.price /= 100
      this.isLoading = false
    },

    async createOrder() {
      let email = this.formData.email
      this.isSubmit = true
      if (!this.isLogin && (email === '' || !validateEmail(email))) {
        let tip = {
          tipTitle: "请求失败",
          tipMsg: "请输入有效查询邮箱",
          type: false,
        }
        this.$bus.$emit('showTipMsg', tip)
        this.isSubmit = false
        return
      } else if (this.isLogin) {
        const {data: res} = await this.$http.post('user/info')
        if (res.status !== 200) {
          let tip = {
            tipTitle: "请求失败",
            tipMsg: res.message,
            type: false,
          }
          this.$bus.$emit('showTipMsg', tip)
        } else {
          email = res.data.email
        }
      }
      const {data: res} = await this.$http.post('order/create', {
        "email": email,
        "goodsId": parseInt(this.formData.goodId),
        "buyAmount": parseInt(this.formData.buyAmount),
      })
      if (res.status !== 200) {
        let tip = {
          tipTitle: "请求失败",
          tipMsg: res.message,
          type: false,
        }
        this.$bus.$emit('showTipMsg', tip)
      } else {
        await this.$router.push({name: 'order', params: {outTradeNo: res.data.outTradeNo}})
        this.$bus.$emit('switchMainContainer', '02');
      }
      this.isSubmit = false
    },
  },

  beforeMount() {
    this.getGood()
    if (localStorage.getItem('token')) {
      this.isLogin = true
    }
  }
}
</script>

<style scoped>

</style>
