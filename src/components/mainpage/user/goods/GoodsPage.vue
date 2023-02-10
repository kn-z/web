<template>
  <div class="content content-full">
    <NoticeBoard/>
    <div class="spinner-grow text-primary" role="status" v-show="!(goodLoaded && cateLoaded)"><span class="sr-only">Loading...</span></div>
    <div class="text-center mb-4 font-size-sm mt-3">
      <CategoryList/>
    </div>
    <GoodsList/>
  </div>
</template>

<script>
import GoodsList from "@/components/mainpage/user/goods/GoodsList";
import CategoryList from "@/components/mainpage/user/goods/CategoryList";
import NoticeBoard from "@/components/tools/NoticeBoard";

export default {
  name: "GoodsPage",
  components: {
    GoodsList,
    CategoryList,
    NoticeBoard,
  },
  data() {
    return {
      goodLoaded:false,
      cateLoaded:false,
    }
  },
  mounted() {
    this.$bus.$on('sendGoodLoaded',(data)=>{
      this.goodLoaded = data
    })
    this.$bus.$on('sendCateLoaded',(data)=>{
      this.cateLoaded = data
    })
  }
}
</script>

<style scoped>

</style>
