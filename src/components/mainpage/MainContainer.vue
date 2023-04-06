<template>
  <main id="main-container">
    <GoodsPage v-if="item==='01'"/>
    <OrderInfo :sideDict="sideDict" v-if="item==='02'"/>
    <BuyPage v-if="item==='03'"/>
    <OrdersPage v-if="item==='04'"/>

    <DashBoard v-if="item==='11'"/>
    <ManageUser :pageDict="pageDict" v-if="item==='12'"/>
    <ManageGoods :pageDict="pageDict" v-if="item==='13'"/>
    <ManageCami :pageDict="pageDict" v-if="item==='14'"/>
    <ManageOrder :pageDict="pageDict" v-if="item==='15'"/>
    <ManagePay :pageDict="pageDict" v-if="item==='16'"/>
    <ManageCategory :pageDict="pageDict" v-if="item==='17'"/>
    <ManageNotice :pageDict="pageDict" v-if="item==='18'"/>
  </main>
</template>
<script>

import BuyPage from "@/components/mainpage/user/buy/BuyPage";
import GoodsPage from "@/components/mainpage/user/goods/GoodsPage";
import OrderInfo from "@/components/mainpage/user/orderinfo/OrderInfo";
import OrdersPage from "@/components/mainpage/user/orderlist/OrdersPage";
import ManageUser from "@/components/mainpage/admin/user/ManageUser";
import DashBoard from "@/components/mainpage/admin/dashboard/DashBoard";
import ManageGoods from "@/components/mainpage/admin/goods/ManageGoods";
import ManageCami from "@/components/mainpage/admin/cami/ManageCami";
import ManageOrder from "@/components/mainpage/admin/order/ManageOrder";
import ManageCategory from "@/components/mainpage/admin/category/ManageCategory";
import ManagePay from "@/components/mainpage/admin/pay/ManagePay";
import ManageNotice from "@/components/mainpage/admin/notice/ManageNotice";

export default {
  name: "MainContainer",
  props: ['loginType', 'sideDict','pageDict'],
  components: {
    BuyPage,
    GoodsPage,
    OrderInfo,
    OrdersPage,
    ManageUser,
    DashBoard,
    ManageGoods,
    ManageCami,
    ManageOrder,
    ManageCategory,
    ManagePay,
    ManageNotice
  },
  data() {
    return {
      item: undefined,
    }
  },
  watch: {
    $route() {
      this.pageManager()
    }
  },
  methods: {
    pageManager() {
      for (const idx in this.sideDict) {
        const side = this.sideDict[idx]
        if (this.$route.fullPath.indexOf(side.path) !== -1) {
          this.item = side.id
          this.$bus.$emit('changeTitle', side.name)
        }
      }
    }
  },
  mounted() {
    this.pageManager()
    this.$bus.$on('switchMainContainer', (data) => {
      this.item = data
    })
  },
}
</script>

<style scoped>

</style>
