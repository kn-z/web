<template>
  <div>
    <div class="font-size-sm text-muted my-2 text-center">{{data.title}}</div>
    <div class="my-2 text-center">
      <div class="tag-read d-inline-block bg-success-lighter px-3 py-2 mb-2 mw-100 rounded text-left" @click="copy">{{data.cami}}</div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  name: "CamiItem",
  props:['data'],
  methods:{
    copy () {
      var clipboard = new Clipboard('.tag-read')
      clipboard.on('success', e => {
        console.log('复制成功')
        //  释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e =>{
        // 不支持复制
        console.log('该浏览器不支持复制')
        // 释放内存
        clipboard.destroy()
      })
    },
  }
}
</script>

<style scoped>

</style>