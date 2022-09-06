<template>
  <li class="nav-main-item">
    <a class="nav-main-link false">
      <i class="nav-main-link-icon si si-speedometer"></i>
      <span class="nav-main-link-name">{{item.name}}</span>
    </a>
  </li>

</template>

<script>
export default {
  name: "SideBarItem",
  props: ["item"]
}


</script>

<style scoped>

</style>