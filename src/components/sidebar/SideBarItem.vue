<template>
  <li class="nav-main-item" @click="switchMC">
    <a :class="this.$route.path===this.item.path ? 'nav-main-link active' : 'nav-main-link false'">
      <i :class=item.icon></i>
      <span class="nav-main-link-name" >{{item.name}}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: "SideBarItem",
  props: ["item"],
  data(){
    return{
      flag: 0,
    }
  },
  methods:{
    async switchMC(){
      this.$bus.$emit('switchSide', 0)
      if (this.$route.path !== this.item.path) {
        await this.$router.push(this.item.path)
      }
      this.$bus.$emit('switchMainContainer', this.item.id);
    }
  },
}


</script>

<style scoped>

</style>
