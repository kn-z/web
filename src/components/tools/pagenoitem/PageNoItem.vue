<template>
  <li @click=setFlag(no) :title=no
      :class="flag===no ? 'ant-pagination-item ant-pagination-item ant-pagination-item-active' : 'ant-pagination-item ant-pagination-item'"
      tabindex="0"><a>{{ no }}</a></li>
</template>

<script>

export default {
  name: "PageNoItem",
  props: ['flag', 'no','dictKey','pageDict'],
  methods: {
    setFlag(no) {
      this.$bus.$emit('setPN', no)
    }
  }
}
</script>

<style scoped>

</style>