<template>
  <div @click="show" data-index="0" :class="flag===index ? 'slick-slide slick-active slick-current' : 'slick-slide'"
       tabindex="-1" :aria-hidden="flag!==index"
       :style="'outline: none; width:'+ this.width + 'px;'">
    <div>
      <div tabindex="-1" style="width: 100%; display: inline-block;"><a
          class="block block-rounded bg-image mb-0 v2board-bg-pixels" href="javascript:void(0)"
          :style="'background-image: url(&quot;'+ notice.image +'&quot;); background-size: cover;'">
        <div class="block-content bg-black-50">
          <div class="mb-5 mb-sm-7 d-sm-flex justify-content-sm-between align-items-sm-center"><p><span
              class="badge badge-danger p-2 text-uppercase">公告</span></p></div>
          <p class="font-size-lg text-white mb-1">{{notice.title}}</p>
          <p class="font-w600 text-white-75">{{date}}</p></div>
      </a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardItem",
  props:['index','flag','width','notice'],
  computed:{
    date(){
      return this.notice.UpdatedAt.split('T')[0]
    },
  },
  methods:{
    show(){
      this.$bus.$emit('openDocumentBoard',this.notice)
    }
  }
}
</script>

<style scoped>

</style>