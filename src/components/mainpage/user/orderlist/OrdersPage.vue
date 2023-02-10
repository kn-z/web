<template>
  <div class="content content-full">
    <div :class="this.isLoading ? 'block block-rounded block-mode-loading' : 'block block-rounded'">
      <div class="bg-white">
        <div class="p-3">
          <div class="ant-radio-group ant-radio-group-outline">
            <label
                :class="status === 0 ? 'ant-radio-button-wrapper ant-radio-button-wrapper-checked' : 'ant-radio-button-wrapper'"
                @click=setStatus(0)>
              <span class="ant-radio-button">
                <input type="radio" class="ant-radio-button-input"><span
                  class="ant-radio-button-inner"></span></span><span>全部</span></label>
            <label
                :class="status === 1 ? 'ant-radio-button-wrapper ant-radio-button-wrapper-checked' : 'ant-radio-button-wrapper'"
                @click=setStatus(1)>
              <span class="ant-radio-button">
                <input type="radio" class="ant-radio-button-input"><span
                  class="ant-radio-button-inner"></span></span><span>已完成</span></label>
          </div>
          <div style="float: right;"><input placeholder="输入邮箱查询" type="text" class="ant-input"
                                            v-model="searchEmail"></div>
        </div>
        <div class="ant-table-wrapper">
          <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
              <div
                  class="ant-table ant-table-default ant-table-scroll-position-left">
                <div class="ant-table-content">
                  <div class="ant-table-scroll">
                    <div tabindex="-1" class="ant-table-body" style="overflow-x: scroll;">
                      <table class="ant-table-fixed" style="width: 900px;">
                        <colgroup>
                          <col>
                          <col>
                          <col>
                          <col>
                          <col>
                          <col>
                        </colgroup>
                        <thead class="ant-table-thead">
                        <tr>
                          <th class=""><span class="ant-table-header-column"><div><span class="ant-table-column-title"># 订单号</span><span
                              class="ant-table-column-sorter"></span></div></span></th>
                          <th class="ant-table-align-center" style="text-align: center;"><span
                              class="ant-table-header-column"><div><span
                              class="ant-table-column-title">商品信息</span><span
                              class="ant-table-column-sorter"></span></div></span></th>
                          <th class="ant-table-align-right" style="text-align: center;"><span
                              class="ant-table-header-column"><div><span
                              class="ant-table-column-title">订单金额</span><span
                              class="ant-table-column-sorter"></span></div></span></th>
                          <th class=""><span class="ant-table-header-column"><div><span class="ant-table-column-title">订单状态</span><span
                              class="ant-table-column-sorter"></span></div></span></th>
                          <th class=""><span class="ant-table-header-column"><div><span class="ant-table-column-title">创建时间</span><span
                              class="ant-table-column-sorter"></span></div></span></th>
                          <th class="ant-table-fixed-columns-in-body ant-table-align-right ant-table-row-cell-last"
                              style="text-align: right;"><span class="ant-table-header-column"><div><span
                              class="ant-table-column-title">操作</span><span
                              class="ant-table-column-sorter"></span></div></span>
                          </th>
                        </tr>
                        </thead>
                        <OrderList :data="data" v-if="!isLoading"/>
                      </table>
                    </div>
                    <div class="ant-table-placeholder" v-show="!data">
                      <div class="ant-empty ant-empty-normal">
                        <div class="ant-empty-image">
                          <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                              <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse>
                              <g fill-rule="nonzero" stroke="#D9D9D9">
                                <path
                                    d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                                <path
                                    d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                    fill="#FAFAFA"></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <p class="ant-empty-description">暂无数据</p></div>
                    </div>
                  </div>
                  <div class="ant-table-fixed-right">
                    <div class="ant-table-body-outer">
                      <div class="ant-table-body-inner">
                        <table class="ant-table-fixed">
                          <colgroup>
                            <col>
                          </colgroup>
                          <thead class="ant-table-thead">
                          <tr style="height: 54px;">
                            <th class="ant-table-align-right ant-table-row-cell-last" style="text-align: right;"><span
                                class="ant-table-header-column"><div><span
                                class="ant-table-column-title">操作</span><span
                                class="ant-table-column-sorter"></span></div></span></th>
                          </tr>
                          </thead>
                          <SetList :data="data" v-if="!isLoading"/>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const validateEmail = (email) => {
  return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

import OrderList from "@/components/mainpage/user/orderlist/OrderList"
import SetList from "@/components/mainpage/user/orderlist/SetList"

export default {
  name: "OrdersPage",
  components: {
    OrderList,
    SetList,
  },
  data() {
    return {
      isLoading: true,
      data: '',
      sortType: 3,
      status: 0,
      searchEmail: '',
    }
  },
  watch: {
    'searchEmail'(newEmail) {
      if (validateEmail(newEmail)) {
        this.isLoading = true
        this.getOrders()
      } else {
        this.data = ''
      }
    },
    'status'() {
      this.isLoading = true
      this.getOrders()
    },
  },
  methods: {
    async getOrders() {
      if (validateEmail(this.searchEmail)){
        await this.queryOrders(this.searchEmail)
        return
      }
      if (!localStorage.getItem('token') && !validateEmail(this.searchEmail)) {
        this.isLoading = false
        return
      }
      const {data: res} = await this.$http.get('orders?status=' + this.status)
      this.data = res.data
      this.isLoading = false
      if (this.data === undefined) return
      this.filterData()
    },

    async queryOrders(email) {
      const {data: res} = await this.$http.get('orders/search?email=' + email + '&status=' + this.status)
      this.isLoading = false
      this.data = res.data
      if (this.data === undefined) return
      this.filterData()
    },

    setStatus(status){
      this.status = status
    },

    filterData() {
      if (this.sortType !== 1) {
        this.data.sort((p1, p2) => {
          if (this.sortType === 2) { // 升序
            return p1.id - p2.id
          } else { // 降序
            return p2.id - p1.id
          }
        })
      }
    }
  },
  mounted() {
    this.getOrders()
    this.$bus.$on('toOrderInfo', (outTradeNo) => {
      this.$router.push({name: 'order', params: {outTradeNo: outTradeNo}}, onComplete => {
          },
          onAbort => {
          })
      this.$bus.$emit('switchMainContainer', 2);
    })
    this.$bus.$on('reloadOrderListPage', () => {
      this.isLoading = true
      this.getOrders()
    })
  }
}
</script>

<style scoped>

</style>
