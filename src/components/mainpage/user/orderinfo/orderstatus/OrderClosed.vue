<template>
  <div class="row" id="cashier">
    <div class="col-12">
      <div class="block block-rounded">
        <div class="block-content pt-0">
          <div class="ant-result ant-result-warning py-4">
            <div class="ant-result-icon"><i aria-label="图标: warning" class="anticon anticon-warning">
              <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="warning" width="1em" height="1em"
                   fill="currentColor" aria-hidden="true">
                <path
                    d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
              </svg>
            </i></div>
            <div class="ant-result-title">已取消</div>
            <div class="ant-result-subtitle">订单由于超时支付已被取消。</div>
          </div>
        </div>
      </div>
      <div class="block block-rounded">
        <div class="block-header block-header-default"><h3 class="block-title v2board-trade-no">商品信息</h3></div>
        <div class="block-content pb-4">
          <div class="v2board-order-info">
            <div><span>商品名称：</span><span>{{ data.title }}</span></div>
            <div><span>商品单价：</span><span>¥ {{ data.price }}</span></div>
            <div><span>商品数量：</span><span>{{ data.buyAmount }} 个</span></div>
          </div>
        </div>
      </div>
      <div class="block block-rounded">
        <div class="block-header block-header-default"><h3 class="block-title v2board-trade-no">订单信息</h3></div>
        <div class="block-content pb-4">
          <div class="v2board-order-info">
            <div><span>订单号：</span><span>{{ data.outTradeNo }}</span></div>
            <div><span>创建时间：</span><span>{{ data.CreatedAt }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderClosed",
  props:["data"],
}
</script>

<style scoped>

</style>
