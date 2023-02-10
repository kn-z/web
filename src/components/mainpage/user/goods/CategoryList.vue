<template>
  <div class="mb-3 font-size-sm mt-3 m-3 mx-xl-0" v-show="loaded">
      <span class="v2board-plan-tabs border-primary text-primary">
        <CategoryItem v-for="cate in categories"
                      :key="cate.id"
                      :cate="cate"
                      :flag = "flag"/>
      </span>
  </div>
</template>

<script>
import CategoryItem from "@/components/mainpage/user/goods/CategoryItem";

export default {
  name: "CategoryList",
  props:["data"],
  data(){
    return{
      loaded:false,
      categories:null,
      flag:0,
    }
  },
  components: {
    CategoryItem,
  },
  methods:{
    async getCate() {
      const {data: res} = await this.$http.get('category')
      this.$bus.$emit('sendCateLoaded',true);
      this.loaded = true
      this.categories = res.data
      this.categories.unshift({id:0, name: "全部"})
    },
  },
  mounted() {
      this.getCate()
      this.$bus.$on('sendFlag',(data)=>{
      this.flag = data
    })
  }
}
</script>

<style scoped>

</style>
