<template>
  <header id="page-header">
    <div class="content-header" style="max-width: unset;">
      <div class="sidebar-toggle" style="display: none;">
        <button type="button" class="btn btn-primary mr-1 d-lg-none">
          <i class="fa fa-fw fa-bars"></i></button></div>
      <div class="v2board-container-title text-white">{{title}}</div>
      <div>
        <div class="dropdown d-inline-block">
          <button type="button" class="btn btn-primary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="far fa fa-user-circle"></i>
            <span class="d-none d-lg-inline ml-1">{{email}}</span>
            <i class="fa fa-fw fa-angle-down ml-1"></i></button>
          <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 false" aria-labelledby="page-header-user-dropdown">
            <div class="p-2">
              <a class="dropdown-item d-flex justify-content-between align-items-center" href="javascript:void(0);">登出<i class="fa fa-fw fa-sign-out-alt text-danger ml-1"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  data(){
    return{
      title: "管理页面",
      email: "login"
    }
  }
}
</script>

<style scoped>

</style>