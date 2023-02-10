<template>
  <li :class="flag===index ? 'slick-active' : ''">
    <button @click="slideToIndex">1</button>
  </li>
</template>

<script>
export default {
  name: "BoardIndexItem",
  props:['index','flag'],
  methods:{
    slideToIndex(){
      this.$bus.$emit('slideTo',this.index)
    }
  }
}
</script>

<style scoped>

</style>