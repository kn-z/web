<template>
  <a class="dropdown-item" :href="item.href"><i class="far fa-fw fa-user mr-1"></i> {{item.name}}</a>
</template>

<script>
export default {
  name: "DropDownItem",
  props: ["item"]
}
</script>

<style scoped>

</style>