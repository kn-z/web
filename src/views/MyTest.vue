<template>
  <div id="root">
    <div id="page-container"
         class="sidebar-o sidebar-dark page-header-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled false">
      <div class="v2board-nav-mask" style="display: none;"></div>
      <nav id="sidebar">
        <div class="content-side content-side-full">
          <ul class="nav-main">
            <li class="nav-main-item"><a class="nav-main-link false"><i
                class="nav-main-link-icon si si-speedometer"></i><span class="nav-main-link-name">仪表盘</span></a></li>
            <li class="nav-main-item"><a class="nav-main-link false"><i
                class="nav-main-link-icon si si-book-open"></i><span class="nav-main-link-name">使用文档</span></a></li>
            <li class="nav-main-heading">订阅</li>
            <li class="nav-main-item"><a class="nav-main-link active"><i class="nav-main-link-icon si si-bag"></i><span
                class="nav-main-link-name">购买订阅</span></a></li>
            <li class="nav-main-item"><a class="nav-main-link false"><i class="nav-main-link-icon si si-check"></i><span
                class="nav-main-link-name">节点状态</span></a></li>
            <li class="nav-main-heading">财务</li>
            <li class="nav-main-item"><a class="nav-main-link false"><i class="nav-main-link-icon si si-list"></i><span
                class="nav-main-link-name">我的订单</span></a></li>
            <li class="nav-main-item"><a class="nav-main-link false"><i class="nav-main-link-icon si si-users"></i><span
                class="nav-main-link-name">我的邀请</span></a></li>
            <li class="nav-main-heading">用户</li>
            <li class="nav-main-item"><a class="nav-main-link false"><i class="nav-main-link-icon si si-user"></i><span
                class="nav-main-link-name">个人中心</span></a></li>
            <li class="nav-main-item"><a class="nav-main-link false"><i
                class="nav-main-link-icon si si-support"></i><span class="nav-main-link-name">我的工单</span></a></li>
            <li class="nav-main-item"><a class="nav-main-link false"><i
                class="nav-main-link-icon si si-bar-chart"></i><span class="nav-main-link-name">流量明细</span></a></li>
          </ul>
        </div>
        <div class="v2board-copyright">KNcloud v1.6.1</div>
      </nav>
      <header id="page-header">
        <div class="content-header">
          <div class="sidebar-toggle" style="display: none;">
            <button type="button" class="btn btn-primary mr-1 d-lg-none"><i class="fa fa-fw fa-bars"></i></button>
          </div>
          <div class="v2board-container-title text-white">购买订阅</div>
          <div>
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-primary mr-1"><i class="far fa fa-sun"></i></button>
            </div>
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-primary mr-1 ant-dropdown-trigger"><i class="far fa fa-language"></i>
              </button>
            </div>
            <div class="dropdown d-inline-block">
              <button type="button" class="btn btn-primary"><i class="far fa fa-user-circle"></i><span
                  class="d-none d-lg-inline ml-1">kncloud@gmail.com</span><i class="fa fa-fw fa-angle-down ml-1"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right p-0 false">
                <div class="p-2"><a class="dropdown-item" href="/#/profile"><i class="far fa-fw fa-user mr-1"></i> 个人中心</a><a
                    class="dropdown-item" href="javascript:void(0);"><i
                    class="far fa-fw fa-arrow-alt-circle-left mr-1"></i> 登出</a></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main id="main-container">
        <div class="content content-full"><h2 class="font-weight-normal mb-4 m-3 mx-xl-0 mt-xl-0 mt-4">
          选择最适合您的计划</h2>
          <div class="mb-3 font-size-sm mt-3 m-3 mx-xl-0"><span
              class="v2board-plan-tabs border-primary text-primary"><span
              class="active bg-primary">全部</span><span>按周期</span><span>按流量</span></span></div>
          <div class="row">
            <div class="col-md-12 col-xl-4"><a class="block block-link-pop block-rounded m-3 mx-xl-0"
                                               href="javascript:void(0);">
              <div class="block-header plan"><h3 class="block-title">轻量包</h3></div>
              <div class="block-content bg-gray-light">
                <div class="py-2"><p class="h1 mb-2">¥ 30.00</p>
                  <p class="h6 text-muted">季付</p></div>
              </div>
              <div class="block-content py-3">
                <div class="mb-3"><p align="center"><i class="fas fa-database" style="color: #495057;"></i> 套餐内含流量100G/月
                </p>
                  <p align="center"><i class="fa fa-clock" style="color: #495057;"></i> 套餐有效时长三个月起</p>
                  <p align="center"><i class="fas fa-sync-alt" style="color: #495057;"></i> 流量在每月订单日重置</p>
                  <p align="center"><i class="fas fa-tachometer-alt" style="color: #495057;"></i> 所有线路均无网速限制
                  </p>
                  <p align="center"><i class="fa fa-play-circle" style="color: #495057;"></i> 解锁奈飞等国外流媒体</p>
                  <p align="center"><i class="fa fa-laptop" style="color: #495057;"></i> 全面支持所有主流系统</p></div>
                <button type="button" class="btn btn-sm btn-alt-primary">立即订阅</button>
              </div>
            </a></div>
            <div class="col-md-12 col-xl-4"><a class="block block-link-pop block-rounded m-3 mx-xl-0"
                                               href="javascript:void(0);">
              <div class="block-header plan"><h3 class="block-title">中量包</h3></div>
              <div class="block-content bg-gray-light">
                <div class="py-2"><p class="h1 mb-2">¥ 20.00</p>
                  <p class="h6 text-muted">月付</p></div>
              </div>
              <div class="block-content py-3">
                <div class="mb-3"><p align="center"><i class="fas fa-database" style="color: #495057;"></i> 套餐包含流量300G/月
                </p>
                  <p align="center"><i class="fa fa-clock" style="color: #495057;"></i> 套餐有效时长一个月起</p>
                  <p align="center"><i class="fas fa-sync-alt" style="color: #495057;"></i> 流量在每月订单日重置</p>
                  <p align="center"><i class="fas fa-tachometer-alt" style="color: #495057;"></i> 所有线路均无网速限制
                  </p>
                  <p align="center"><i class="fa fa-play-circle" style="color: #495057;"></i> 解锁奈飞等国外流媒体</p>
                  <p align="center"><i class="fa fa-laptop" style="color: #495057;"></i> 全面支持所有主流系统</p></div>
                <button type="button" class="btn btn-sm btn-alt-primary">立即订阅</button>
              </div>
            </a></div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyTest",
  data() {
    return {
      timer: null,
      value: "发送",
    };
  },
  methods: {
    start() {
      this.value = 10
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.value > 1) {
          this.value--
        } else
          this.value = "发送"
      }, 1000); // 注意: 第一个参数为方法名的时候不要加括号;
    },
  },
};
</script>
<style scoped>

</style>



