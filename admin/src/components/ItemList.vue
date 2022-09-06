<template>
  <div class="row">
    <ItemInfo v-for="item in items"
              :key="item.id"
              :item="item"
    />
  </div>
</template>

<script>
import ItemInfo from "@/components/ItemInfo";

export default {
  name: "ItemList",
  components: {
    ItemInfo
  },
  data(){
    return{
      items:""
    }
  },
  methods:{
    async GetItems(){
      const {data : res} = await this.$http.get('items')
      console.log(res.data)
      this.items = res.data
    },
  },
  mounted(){
    this.GetItems()
  }
}
</script>

<style scoped>

</style>