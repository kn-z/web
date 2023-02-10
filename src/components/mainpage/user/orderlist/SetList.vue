<template>
  <tbody class="ant-table-tbody">
   <SetItem
            v-for="order in data"
            :key="order.outTradeNo"
            :order="order"/>
  </tbody>
</template>

<script>
import SetItem from "@/components/mainpage/user/orderlist/SetItem"

export default {
  name: "SetList",
  props:['data'],
  components:{
    SetItem,
  }
}
</script>

<style scoped>

</style>
