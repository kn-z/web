<template>
  <a class="dropdown-item" :href="item.href" @click="clickHandle"><i :class=item.icon></i> {{item.name}}</a>
</template>

<script>
export default {
  name: "DropDownItem",
  props: ["item"],
  methods:{
    clickHandle(){
      if (this.item.name === "登出") {
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style scoped>

</style>
