<template>
  <div class="col-md-12 col-xl-4" @click="this.goodInfo"><a class="block block-link-pop block-rounded m-3 mx-xl-0">
    <div data-v-42f4bad4="" class="block-header plan" style="justify-content: space-around;">
          <canvas width="250" height="250" style="display: none;"></canvas>
          <img object-fit="contain" alt="pic" style="display: block;text-align: center;" :src=good.image>
    </div>
<!--    <div class="block-header plan"><h3 class="block-title">{{ good.title }}</h3>-->
<!--    </div>-->
    <div class="block-content bg-body" style="display: block;text-align: center;">
      <div class="py-2"><p class="h3 mb-2">{{ good.title }}</p>
        <p class="ant-tag mt-2" style="font-size: 15px;">¥ {{ (good.price/100).toLocaleString('zh', { style: 'currency', currency: 'CNY' }).split('¥')[1] }}</p>
        <p :class="good.stock ? 'ant-tag-green ant-tag mt-2' : 'ant-tag-red ant-tag mt-2'" style="font-size: 15px; ">库存 {{ good.stock }} 个</p></div></div>
    <div class="block-content py-3">
      <div class="mb-3">
        <p align="center">
          <i style="  color: #495057;">
          </i>{{ good.content }}</p>
      </div>
    </div>
  </a></div>
</template>

<script>
export default {
  name: "GoodsInfo",
  props:["good"],
  methods:{
    async goodInfo(){
      await this.$router.push({name: 'good', params: {id: this.good.id}})
      this.$bus.$emit('switchMainContainer', '03');
    }
  },
}
</script>

<style scoped>

</style>
