<template>
  <div class="p-0 p-lg-4">
    <div class="d-flex justify-content-between align-items-center"></div>
    <div class="ant-spin-nested-loading">
      <div class="ant-spin-container">
        <div :class="isLoading ? 'block block-rounded block-mode-loading' : 'block block-rounded'">
          <div class="bg-white">
            <div style="padding: 15px;">
              <div class="ant-btn-group">
                <button type="button" class="ant-btn"><i aria-label="图标: filter" class="anticon anticon-filter">
                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="filter" width="1em" height="1em"
                       fill="currentColor" aria-hidden="true">
                    <path
                        d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
                  </svg>
                </i><span> 过滤器</span></button>
              </div>
              <button @click="add" type="button" class="ant-btn" style="margin-left: 10px;"><i aria-label="图标: plus"
                                                                                  class="anticon anticon-plus">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="plus" width="1em" height="1em"
                     fill="currentColor" aria-hidden="true">
                  <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                  <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                </svg>
              </i><span> 添加订单</span></button>
            </div>
            <div class="ant-table-wrapper">
              <div class="ant-spin-nested-loading">
                <div class="ant-spin-container">
                  <div class="ant-table ant-table-default ant-table-scroll-position-left">
                    <div class="ant-table-content">
                      <div class="ant-table-scroll">
                        <div tabindex="-1" class="ant-table-body" style="overflow-x: scroll;">
                          <table class="ant-table-fixed" style="width: 1050px;">
                            <colgroup>
                              <col>
                              <col>
                              <col>
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
                    </div>
                  </div>
                  <PageNo :type="'04'" :pageDict="pageDict" :count="pageNo.count"/>
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
import OrderList from "@/components/mainpage/user/orderlist/OrderList";
import PageNo from "@/components/tools/PageNo";

export default {
  name: "ManageOrder",
  props: ['pageDict'],
  components:{
    OrderList,
    PageNo,
  },
  data() {
    return {
      sort:{
        key:'',
        type:'',
      },
      pageNo:{
        flag: 1,
        count: 0,
      },
      isLoading: true,
      data: '',
      noData: true,
    }
  },
  methods: {
    async getOrders() {
      this.isLoading = true
      let url = 'order/all?pageSize=10&pageNum='+ this.pageNo.flag+'&sortKey='+this.sort.key+'&sortType='+this.sort.type
      const {data: res} = await this.$http.get(url)
      this.isLoading = false
      this.data = res.data.orders
      this.pageNo.count = res.data.count
    },
    filter(){
      this.$bus.$emit('openRB','01F')
    },
    add(){
      this.$bus.$emit('openRB', '04A')
    },

    sortByKey(key){
      if (this.sort.key !== key){
        this.sort.key = key
        this.sort.type = 'desc'
      }
      else {
        switch (this.sort.type) {
          case '':
            this.sort.type = 'desc'
            break;
          case 'desc':
            this.sort.type = 'asc'
            break;
          case 'asc':
            this.sort.type = ''
        }
      }
      this.getOrders()
    },
  },

  mounted() {
    this.getOrders()
    this.$bus.$on('reloadOrderList', (data) => {
      if (data) {
        this.pageNo.flag = data
      }
      this.getOrders()
    })
  }
}
</script>

<style scoped>

</style>