<template>
  <div id="root">
    <div id="page-container" class="sidebar-o sidebar-dark page-header-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled false">
      <div class="v2board-nav-mask" style="display: none;"></div>
      <SideBar/>
      <PageHeader/>
      <MainContainer/>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import SideBar from "@/components/SideBar";
import MainContainer from "@/components/MainContainer";

export default {
  name: "AdminView",
  components: {
    SideBar,
    PageHeader,
    MainContainer
  },
}

</script>

<style scoped>

</style>