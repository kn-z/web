<template>
  <ul class="nav-main">
    <SideBarItem v-for="item in sides"
              :key="item.id"
              :item="item"
    />
  </ul>

</template>

<script>
import SideBarItem from "@/components/SideBarItem";

export default {
  name: "SideBarList",
  components:{
    SideBarItem
  },
  data(){
    return{
      sides:[
        {id:"01", name:"购买商品"},
        {id:"02", name:"订单查询"}
      ]
    }
  }
}
</script>

<style scoped>

</style>