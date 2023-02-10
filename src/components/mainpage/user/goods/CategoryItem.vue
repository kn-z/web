<template>
  <span @click="changeCate" :class="isOutstanding">{{ cate.name }}</span>
</template>

<script>
export default {
  name: "CategoryItem",
  props:["cate","flag"],
  computed: {
    isOutstanding() {
      if (this.cate.id === this.flag) return "active bg-primary";
      else return "";
    },
  },
  methods:{
    changeCate(){
      this.$bus.$emit('switchCate', this.cate.id)
      this.$bus.$emit('sendFlag', this.cate.id)
    }
  }
}
</script>

<style scoped>

</style>
