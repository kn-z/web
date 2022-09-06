<template>
  <header id="page-header">
    <div class="content-header" style="max-width: unset;">
      <div class="sidebar-toggle" style="display: none;">
        <button type="button" class="btn btn-primary mr-1 d-lg-none" @click="OpenSide">
          <i class="fa fa-fw fa-bars"></i></button></div>
      <div class="v2board-container-title text-white">{{title}}</div>
      <div>
        <div tabindex="0" class="dropdown d-inline-block" @blur="Test">
          <button type="button"
                  class="btn btn-primary"
                  id="page-header-user-dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  @click = "SwitchDDM"
          >
            <i class="far fa fa-user-circle"></i>
            <span class="d-none d-lg-inline ml-1">{{email}}</span>
            <i class="fa fa-fw fa-angle-down ml-1"></i></button>
          <DropDownMenu v-show="showDDM"/>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
import DropDownMenu from "@/components/DropDownMenu";

export default {
  name: "PageHeader",
  components: {
    DropDownMenu
  },
  data(){
    return{
      title: "管理页面",
      email: "未登录",
      showDDM: 0
    }
  },
  methods:{
    OpenSide(){
      this.$bus.$emit('switchSide', 1)
    },
    SwitchDDM(){
      this.showDDM = !this.showDDM
    },
    CloseDDM(){
      this.showDDM = 0
    },
    Test(){
      console.log("1234")
    }
  }

}
</script>

<style scoped>

</style>