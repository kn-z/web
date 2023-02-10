<template>
  <div>
    <div v-if="loginType" class="text-center bg-gray-lighter p-3 px-4"><a>忘记密码</a></div>
    <div v-if="!loginType">
      <div class="text-left bg-gray-lighter p-3 px-4">
        <a class="font-size-sm text-muted" href="#/signup">注册</a>
        <div class="ant-divider ant-divider-vertical" role="separator"></div>
        <a class="font-size-sm text-muted" href="">返回主页</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginFooter",
  props: ["loginType"],
}
</script>

<style scoped>
</style>
