<template>

  <div class="col-md-6 col-xl-4">
    <a class="block block-link-pop block-rounded p-3 p-sm-0" href="javascript:void(0);">
      <div class="block-header plan">
        <h3 class="block-title">{{item.title}}</h3>
      </div><div class="block-content bg-body">
      <div class="py-2"><p class="h1 mb-2">¥ {{item.price/100}}</p>
        <p class="h6 text-muted">剩余{{item.stock}}</p></div></div>
      <div class="block-content py-3">
        <div class="py-2">
          <p align="center">
            <i style="color: #495057;">
            </i>{{item.content}}</p>
        </div>
      </div>
    </a>
  </div>


</template>

<script>
export default {
  name: "ItemInfo",
  props:["item"]
}
</script>

<style scoped>

</style>