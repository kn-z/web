<template>
  <nav id="sidebar">
    <div class="smini-hidden bg-header-dark">
      <div class="content-header justify-content-lg-center bg-black-10">
        <a class="link-fx font-size-lg text-white" href="">
          <span class="text-white-75">Gofaka</span></a>
        <div class="d-lg-none">
          <a class="text-white ml-2" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0);">
            <i class="fa fa-times-circle" @click = "CloseSide"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="content-side content-side-full">
    <SideBarList :sideDict = sideDict />
    </div>
    <div class="v2board-copyright">GoFaKa  v1.6.0</div>
  </nav>
</template>

<script>
import SideBarList from "@/components/sidebar/SideBarList";

export default {
  name: "SideBar",
  props:['sideDict'],
  components:{
    SideBarList
  },
  data(){
    return{
      flag: '01',
    }
  },
  methods: {
    CloseSide() {
      this.$bus.$emit('switchSide', 0)
    }
  }
}

</script>

<style scoped>

</style>
