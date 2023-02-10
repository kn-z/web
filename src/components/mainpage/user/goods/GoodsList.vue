<template>
  <div class="row">
        <GoodsItem v-for="good in showGoods"
                   :key="good.id"
                   :good="good"
        />
  </div>
</template>

<script>
import GoodsItem from "@/components/mainpage/user/goods/GoodsItem";

export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  data() {
    return {
      goods: null,
      showGoods:[],
      flag:0,
    }
  },
  methods: {
    async getGoods() {
      const {data: res} = await this.$http.get('goods/list')
      this.$bus.$emit('sendGoodLoaded',true);
      this.goods = res.data
      this.checkGoods()
    },
    checkGoods(){
      if (!this.flag) {
        this.showGoods = this.goods
        return
      }
      this.showGoods = []
      for (const idx in this.goods){
        if (this.goods[idx].cateId === this.flag){
          this.showGoods.push(this.goods[idx])
        }
      }
    },
  },
  mounted() {
    this.getGoods()
    this.$bus.$on('switchCate',(data)=>{
      this.flag = data
      this.checkGoods()
    })
  }
}
</script>

<style scoped>

</style>
