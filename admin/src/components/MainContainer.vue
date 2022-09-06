<template>
  <main id="main-container">
    <div class="content content-full">
      <h2 class="font-weight-normal text-center mb-4 mt-sm-0 mt-4">选择最适合您的计划</h2>
      <div class="text-center mb-4 font-size-sm mt-3">
        <span class="v2board-plan-tabs">
          <span class="active">全部</span>
          <span>按周期</span>
          <span>一次性</span>
        </span>
      </div>
      <ItemList/>
    </div>
  </main>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  name: "MainContainer",
  components:{
    ItemList
  }
}
</script>

<style scoped>

</style>