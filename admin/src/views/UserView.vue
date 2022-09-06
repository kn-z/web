<template>
  <div id="root">

    <div id="page-container" :class="sideType">
      <div class="v2board-nav-mask" :style="maskShow" @click="CloseSide"></div>
      <SideBar/>
      <PageHeader/>
      <MainContainer/>
    </div>
  </div>
</template>


<script>
import SideBar from "@/components/SideBar";
import PageHeader from "@/components/PageHeader";
import MainContainer from "@/components/MainContainer";

export default {
  name: "UserView",
  components: {
    PageHeader,
    SideBar,
    MainContainer
  },
  data(){
    return{
      maskShow: "display: none;",
      sideType:"sidebar-o sidebar-dark page-header-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled false"
    }
  },
  methods:{
    OpenSide(){
      this.maskShow = "display: block;"
      this.sideType = "sidebar-o sidebar-dark page-header-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled sidebar-o-xs"
      console.log('side open')
    },
    CloseSide(){
      this.maskShow = "display: none;"
      this.sideType = "sidebar-o sidebar-dark page-header-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled false"
      console.log('side close')
    }
  },
  mounted() {
    this.$bus.$on('switchSide',(data)=>{
      if (data === 1) this.OpenSide()
      if (data === 0) this.CloseSide()
    })
  }
}
</script>

<style scoped>

</style>