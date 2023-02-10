<template>
  <tbody class="ant-table-tbody">
  <OrderItem v-for="order in data"
             :key="order.outTradeNo"
             :order="order"
  />
  </tbody>
</template>

<script>
import OrderItem from "@/components/mainpage/user/orderlist/OrderItem"


export default {
  name: "OrderList",
  props: ['data'],
  components: {
    OrderItem,
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
