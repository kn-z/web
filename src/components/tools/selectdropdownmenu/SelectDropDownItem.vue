<template>
  <li role="option" unselectable="on" :class="item.id === id ?  'ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active ant-select-dropdown-menu-item-selected' : 'ant-select-dropdown-menu-item'" aria-selected="false"
      style="user-select: none;">{{item.name}}
  </li>
</template>

<script>
export default {
  name: "SelectDropDownItem",
  props:['id', 'item'],
}
</script>

<style scoped>

</style>