<template>
  <tr :class=style data-row-key="3" @mouseover="changeFocus" @mouseleave="clearFocus" style="height: 54px;">
    <td class="" style="text-align: right;">
      <div><a @click="orderInfo">查看详情</a>
        <div class="ant-divider ant-divider-vertical" role="separator"></div>
        <a :disabled="!cancel" href="javascript:void(0);" @click="lbHandle">{{ txt }}</a></div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "SetItem",
  props: ['order'],
  data() {
    return {
      focusTo: false,
      cancel: true,
      txt: "取消",
    }
  },
  computed:{
      style(){
        return (this.focusTo === this.order.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
      }
  },
  methods: {
    changeFocus(){
      this.$bus.$emit('switchInfoFocus', this.order.id)
    },
    clearFocus(){
      this.$bus.$emit('switchInfoFocus', null)
    },
    orderInfo() {
      this.$bus.$emit('toOrderInfo', this.order.outTradeNo)
    },
    async lbHandle() {
      if (this.order.status === "已完成") {
        this.showCami(this.order.outTradeNo)
      }
      else{
        await this.$http.put('order/cancel', {
          "outTradeNo": this.order.outTradeNo,
        })
        this.$bus.$emit('reloadOrderListPage')
      }
    },
    showCami(outTradeNo) {
      let isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      if (isMobile){
        this.$router.push({name: 'showCami', params: {outTradeNo: outTradeNo}},onComplete => {},
            onAbort => {})
      }
      else{
        const width = window.innerWidth / 3;
        const height = window.innerHeight / 2;
        window.open("http://hkt.knyun.xyz:8080/#/items/"+outTradeNo,'','width='+width+',height='+height);
      }
    }
  },
  mounted() {
    if (this.order.status === "已取消") {
      this.cancel = false
    }
    if (this.order.status === "已完成") {
      this.txt = "卡密"
    }
    this.$bus.$on('switchBtFocus',(data)=>{
      this.focusTo = data
    })
  }
}
</script>

<style scoped>

</style>
