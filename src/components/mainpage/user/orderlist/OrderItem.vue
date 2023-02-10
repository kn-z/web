<template>
  <tr :class=style data-row-key="2" @mouseover="changeFocus" @mouseleave="clearFocus">
    <td class=""><a @click="orderInfo">{{ order.outTradeNo }}</a></td>
    <td class="" style="text-align: center;"><span class="ant-tag">{{ order.title }} × {{ order.buyAmount }}</span></td>
    <td class="" style="text-align: center;"><span class="ant-tag">CNY {{ totalAmount }}</span></td>
    <td class="">
      <div>
        <span class="ant-badge ant-badge-status ant-badge-not-a-wrapper"><span
          :class="statusStyle"></span><span
          class="ant-badge-status-text"></span></span>{{ status }}
      </div>
    </td>
    <td class="">{{ createdAt }} </td>
  </tr>
</template>

<script>
export default {
  name: "OrderItem",
  props:['order'],
  data(){
    return{
      focusTo: null,
    }
  },
  computed:{
    style(){
      return (this.focusTo === this.order.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
    },
    createdAt(){
      let dataForm = this.order
      let date =  dataForm.CreatedAt.split('T')[0]
      let time =  dataForm.CreatedAt.split('T')[1]
      return  date + " " + time.split(":")[0] + ":" + time.split(":")[1]
    },
    totalAmount(){
      let dataForm = this.order
      return (dataForm.totalAmount/100).toLocaleString('zh', { style: 'currency', currency: 'CNY' }).split('¥')[1]
    },
    statusStyle(){
      let dataForm = this.order
      switch (dataForm.status){
        case 0:{
          return "ant-badge-status-dot ant-badge-status-error"
        }
        case 1:{
          return "ant-badge-status-dot ant-badge-status-success"
        }
        default:{
          return "ant-badge-status-dot ant-badge-status-default"
        }
      }
    },
    status(){
      let dataForm = this.order
      switch (dataForm.status){
        case 0:{
          return "待支付"
        }
        case 1:{
          return "已完成"
        }
        default:{
          return "已取消"
        }
      }
    }
  },
  methods: {
    changeFocus(){
      this.$bus.$emit('switchBtFocus', this.order.id)
    },
    clearFocus(){
      this.$bus.$emit('switchBtFocus', null)
    },
    orderInfo(){
      this.$bus.$emit('toOrderInfo',this.order.outTradeNo);
    },
  },
  mounted() {
    this.$bus.$on('reloadOrderItem',()=>{
      this.formatInfo()
    })
    this.$bus.$on('switchInfoFocus',(data)=>{
      this.focusTo = data
    })
  }
}
</script>

<style scoped>

</style>
