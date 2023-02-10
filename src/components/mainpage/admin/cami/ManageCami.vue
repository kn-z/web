<template>
  <div class="p-0 p-lg-4">
    <div class="d-flex justify-content-between align-items-center"></div>
    <div class="ant-spin-nested-loading">
      <div class="ant-spin-container">
        <div :class="isLoading ? 'block block-rounded block-mode-loading':'block border-bottom'">
          <div class="bg-white">
            <div class="v2board-table-action" style="padding: 15px;">
              <button @click="add" type="button" class="ant-btn ant-dropdown-trigger"><i aria-label="图标: plus"
                                                                            class="anticon anticon-plus">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="plus" width="1em" height="1em"
                     fill="currentColor" aria-hidden="true">
                  <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                  <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                </svg>
              </i></button>
              <input placeholder="输入任意关键字搜索" class="ant-input ml-2" type="text" value="" style="width: 200px;">
              <button type="button" class="ant-btn ant-btn-primary" style="float: right;"><span>编辑排序</span></button>
            </div>
            <div role="presentation">
              <div class="ant-table-wrapper">
                <div class="ant-spin-nested-loading">
                  <div class="ant-spin-container">
                    <div class="ant-table ant-table-default ant-table-scroll-position-left">
                      <div class="ant-table-content">
                        <div class="ant-table-scroll">
                          <div tabindex="-1" class="ant-table-body" style="overflow-x: scroll;">
                            <table class="ant-table-fixed" style="width: 1300px;">
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
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">ID</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">状态</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">所属商品</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">卡密</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">所属订单</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class="ant-table-fixed-columns-in-body ant-table-align-right ant-table-row-cell-last"
                                    style="text-align: right;"><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">操作</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                              </tr>
                              </thead>
                              <tbody class="ant-table-tbody">
                                <AdminCamiItem v-if="!isLoading" v-for="item in this.data"
                                               :key="item.id"
                                               :item="item"/>
                              </tbody>
                            </table>
                          </div>
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
                        <div class="ant-table-fixed-right">
                          <div class="ant-table-body-outer">
                            <div class="ant-table-body-inner">
                              <table class="ant-table-fixed">
                                <colgroup>
                                  <col>
                                </colgroup>
                                <thead class="ant-table-thead">
                                <tr style="height: 54px;">
                                  <th class="ant-table-align-right ant-table-row-cell-break-word ant-table-row-cell-last"
                                      style="text-align: right;"><span class="ant-table-header-column"><div><span
                                      class="ant-table-column-title">操作</span><span
                                      class="ant-table-column-sorter"></span></div></span></th>
                                </tr>
                                </thead>
                                <tbody class="ant-table-tbody">
                                  <AdminCamiSetItem v-if="!isLoading" :pageDict="pageDict" :dictKey="dictKey"
                                                    v-for="item in this.data"
                                                    :key="item.id"
                                                    :item="item"/>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <PageNo :dictKey="dictKey" :pageDict="pageDict" :count="pageNo.count"/>
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
import AdminCamiItem from "@/components/mainpage/admin/cami/AdminCamiItem";
import AdminCamiSetItem from "@/components/mainpage/admin/cami/AdminCamiSetItem";
import PageNo from "@/components/tools/PageNo";

export default {
  name: "ManageCami",
  props: ['pageDict'],
  components: {
    AdminCamiItem,
    AdminCamiSetItem,
    PageNo,
  },
  data() {
    return {
      sort: {
        key: '',
        type: '',
      },
      pageNo: {
        flag: 1,
        count: 0,
      },
      dictKey : "03",
      isLoading: true,
      data: '',
      noData: true,
    }
  },
  methods: {
    async getItemList() {
      this.isLoading = true
      let url = 'item/all?pageSize=10&pageNum=' + this.pageNo.flag + '&sortKey=' + this.sort.key + '&sortType=' + this.sort.type
      const {data: res} = await this.$http.get(url)
      this.data = res.data.items
      console.log(this.data)
      this.pageNo.count = res.data.count
      this.isLoading = false
    },
    async getGoodsList() {
      this.isLoading = true
      const {data: res} = await this.$http.get('goods/all')
      const newArr = res.data.map(item => ({id: item.id, name: item.title}));
      this.$bus.$emit('selectorData',newArr)
      this.$bus.$emit('selectorList',newArr)
      this.isLoading = false
    },
    add() {
      this.$bus.$emit('openRB', '03A')
    },
  },
  mounted() {
    this.getItemList()
    this.getGoodsList()
    this.$bus.$on(this.pageDict[this.dictKey].methodName, (data) => {
      if (data) {
        this.pageNo.flag = data
      }
      this.getItemList()
    })
  }
}
</script>

<style scoped>

</style>