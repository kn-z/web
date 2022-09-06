<template>
  <div>
    <div v-show="1-type" class="text-center bg-gray-lighter p-3 px-4"><a>忘记密码</a></div>
<!--    <AlertBox/>-->
    <div v-show="type">
      <div class="text-left bg-gray-lighter p-3 px-4">
        <a class="font-size-sm text-muted" href="javascript:void(0);">注册</a>
        <div class="ant-divider ant-divider-vertical" role="separator"></div>
        <a class="font-size-sm text-muted" href="javascript:void(0);">忘记密码</a>
<!--        <span class="v2board-login-i18n-btn ant-dropdown-trigger">-->
<!--          <i class="si si-globe pr-1"></i>-->
<!--          <span class="font-size-sm text-muted" style="vertical-align: text-bottom;">简体中文</span>-->
<!--        </span>-->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginFooter",
  props: ["type"],
}
</script>

<style scoped>
</style>
