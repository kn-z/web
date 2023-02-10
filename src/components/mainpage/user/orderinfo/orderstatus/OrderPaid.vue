<template>
  <div class="row" id="cashier">
    <div class="col-12">
      <div class="block block-rounded">
        <div class="block-content pt-0">
          <div class="ant-result ant-result-success py-4">
            <div class="ant-result-icon"><i aria-label="图标: check-circle" class="anticon anticon-check-circle">
              <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="check-circle" width="1em" height="1em"
                   fill="currentColor" aria-hidden="true">
                <path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
              </svg>
            </i></div>
            <div class="ant-result-title">已完成</div>
            <div class="ant-result-subtitle">订单已支付并开通。</div>
            <div class="ant-result-extra">
              <button type="button" class="btn btn-primary btn-sm btn-danger btn-rounded px-3" @click=showCami(data.outTradeNo)><i
                  class="nav-main-link-icon si si-book-open mr-1"></i>查看卡密
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="block block-rounded">
        <div class="block-header block-header-default"><h3 class="block-title v2board-trade-no">商品信息</h3></div>
        <div class="block-content pb-4">
          <div class="v2board-order-info">
            <div><span>商品名称：</span><span>{{ data.title }}</span></div>
            <div><span>商品单价：</span><span>¥ {{ data.price }}</span></div>
            <div><span>商品数量：</span><span>{{ data.buyAmount }} 个</span></div>
          </div>
        </div>
      </div>
      <div class="block block-rounded">
        <div class="block-header block-header-default"><h3 class="block-title v2board-trade-no">订单信息</h3></div>
        <div class="block-content pb-4">
          <div class="v2board-order-info">
            <div><span>订单号：</span><span>{{ data.outTradeNo }}</span></div>
            <div><span>创建时间：</span><span>{{ data.CreatedAt }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderPaid",
  props:["data"],
  data() {
    return {
    }
  },
  computed:{
    url(){
      // "http://hkt.knyun.xyz:8080/#/items/"+this.data.outTradeNo
      return +this.data.outTradeNo
    }
  },
  methods:{
    showCami(outTradeNo) {
      let isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      if (isMobile){
          this.$router.push({name: 'showCami', params: {outTradeNo: outTradeNo}},onComplete => {},
              onAbort => {})
        }
        else{
          const width = window.innerWidth / 3;
          const height = window.innerHeight / 2;
          window.open("http://hk.knyun.xyz:8080/#/items/"+outTradeNo,'','width='+width+',height='+height);
        }
      }
  },
}
</script>

<style scoped>

</style>
