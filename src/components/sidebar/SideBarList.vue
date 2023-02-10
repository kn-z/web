<template>
  <ul class="nav-main">
    <SideBarItem v-for="item in sideDict"
                 v-show="item.inSide"
                 :key="item.id"
                 :item="item"
    />
  </ul>
</template>

<script>
import SideBarItem from "@/components/sidebar/SideBarItem";

export default {
  name: "SideBarList",
  props:['sideDict'],
  components: {
    SideBarItem
  },
}
</script>

<style scoped>
</style>
