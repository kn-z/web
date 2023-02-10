<template>
  <div class="content content-full">
    <div class="spinner-grow text-primary" role="status"  v-show=this.isLoading><span class="sr-only">Loading...</span></div>
    <OrderWaited :data="this.data"  v-if="!this.isLoading && this.data.status===0"/>
    <OrderPaid :data="this.data" v-if="!this.isLoading && this.data.status===1"/>
    <OrderClosed :data="this.data" v-if="!this.isLoading && this.data.status===2"/>
  </div>
</template>

<script>
import OrderWaited from "@/components/mainpage/user/orderinfo/orderstatus/OrderWaited";
import OrderPaid from "@/components/mainpage/user/orderinfo/orderstatus/OrderPaid";
import OrderClosed from "@/components/mainpage/user/orderinfo/orderstatus/OrderClosed";

export default {
  name: "PayPage",
  props:['sideDict'],
  components: {OrderClosed, OrderPaid, OrderWaited},
  data() {
    return {
      isLoading:true,
      data: {
        outTradeNo:null,
        status:null,
        title:null,
      },
    }
  },

  watch: {
    $route() {
      this.isLoading = true
      this.getOrder()
    }
  },

  methods: {
    async getOrder() {
      if (this.$route.fullPath.indexOf("/order/info") !== -1) {
        this.data.outTradeNo = this.$route.fullPath.split('/')[3]
        const {data: res} = await this.$http.get("order/" + this.data.outTradeNo)
        if (res.status !== 200) {
          console.log(res.message)
        } else {
          this.data = res.data
          this.data.totalAmount /= 100
          this.data.CreatedAt = this.data.CreatedAt.split('T')[0] + " " + this.data.CreatedAt.split('T')[1].split('.')[0]
          this.data.price = (this.data.price/100).toLocaleString('zh', { style: 'currency', currency: 'CNY' }).split('¥')[1];
          this.isLoading = false
        }
      }
    },
  },

  mounted() {
    this.$bus.$emit('changeTitle', "订单详情")
    this.$bus.$on('reloadOrderPage',()=>{
      this.isLoading = true
      this.getOrder()
    })
    this.$bus.$on('switchOrderStatus',(status)=>{
      this.data.status = status
    })
    this.isLoading = true
    this.getOrder()
  }
}
</script>

<style scoped>

</style>
