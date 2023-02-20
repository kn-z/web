<template>
    <div class="p-0 p-lg-4">
        <div class="d-flex justify-content-between align-items-center"></div>
        <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
                <div :class="isLoading ? 'block block-rounded block-mode-loading':'block border-bottom'">
                    <div class="bg-white">
                        <div style="padding: 15px;">
                            <button @click="add" type="button" class="ant-btn"><i aria-label="图标: plus"
                                                                                  class="anticon anticon-plus">
                                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="plus" width="1em"
                                     height="1em"
                                     fill="currentColor" aria-hidden="true">
                                    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                                    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                                </svg>
                            </i><span> 添加商品</span></button>
                        </div>
                        <div role="presentation">
                            <div class="ant-table-wrapper">
                                <div class="ant-spin-nested-loading">
                                    <div class="ant-spin-container">
                                        <div class="ant-table ant-table-default ant-table-scroll-position-left">
                                            <div class="ant-table-content">
                                                <div class="ant-table-scroll">
                                                    <div tabindex="-1" class="ant-table-body"
                                                         style="overflow-x: scroll;">
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
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">类别</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">销售状态</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">名称</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"
                                                                                   style="text-align: center;"><div><span
                                                                        class="ant-table-column-title">单价</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">库存</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class="ant-table-fixed-columns-in-body ant-table-align-right ant-table-row-cell-last"
                                                                    style="text-align: right;"><span
                                                                        class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">操作</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody class="ant-table-tbody">
                                                            <AdminGoodsItem v-if="!isLoading" :pageDict="pageDict"
                                                                            :dictKey="dictKey"
                                                                            v-for="goods in this.data"
                                                                            :key="goods.id"
                                                                            :goods="goods"/>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="ant-table-placeholder" v-show="!data">
                                                    <div class="ant-empty ant-empty-normal">
                                                        <div class="ant-empty-image">
                                                            <svg width="64" height="41" viewBox="0 0 64 41"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <g transform="translate(0 1)" fill="none"
                                                                   fill-rule="evenodd">
                                                                    <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32"
                                                                             ry="7"></ellipse>
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
                                                                    <th class="ant-table-align-right ant-table-row-cell-last"
                                                                        style="text-align: right;">
                                  <span class="ant-table-header-column"><div><span
                                          class="ant-table-column-title text-center">操作</span><span
                                          class="ant-table-column-sorter"></span></div></span></th>
                                                                </tr>
                                                                </thead>
                                                                <tbody class="ant-table-tbody">
                                                                <AdminGoodsSetItem v-if="!isLoading"
                                                                                   :pageDict="pageDict"
                                                                                   :dictKey="dictKey"
                                                                                   v-for="goods in this.data"
                                                                                   :key="goods.id"
                                                                                   :goods="goods"/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="v2board-table-dropdown" class="ant-dropdown ant-dropdown-placement-bottomLeft"
                                 style="display: none; position: fixed; top: 0px; left: 0px;">
                                <ul class="ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical">
                                    <li class="ant-dropdown-menu-item"><a><i aria-label="图标: edit"
                                                                             class="anticon anticon-edit">
                                        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="edit"
                                             width="1em" height="1em"
                                             fill="currentColor" aria-hidden="true">
                                            <path
                                                    d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                                        </svg>
                                    </i> 编辑</a></li>
                                    <li class="ant-dropdown-menu-item"><a style="color: rgb(255, 77, 79);"><i
                                            aria-label="图标: delete"
                                            class="anticon anticon-delete">
                                        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="delete"
                                             width="1em" height="1em"
                                             fill="currentColor" aria-hidden="true">
                                            <path
                                                    d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                        </svg>
                                    </i> 删除</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminGoodsItem from "@/components/mainpage/admin/goods/AdminGoodsItem";
import AdminGoodsSetItem from "@/components/mainpage/admin/goods/AdminGoodsSetItem";

export default {
    name: "ManageGoods",
    props: ['pageDict'],
    components: {
        AdminGoodsItem,
        AdminGoodsSetItem,
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
            dictKey: "02",
            isLoading: true,
            data: '',
        }
    },
    methods: {
        async getGoodsList() {
            this.isLoading = true
            const {data: res} = await this.$http.get('goods/all')
            this.data = res.data
            console.log(this.data)
            this.isLoading = false
        },
        async getCategoryList() {
            this.isLoading = true
            const {data: res} = await this.$http.get('category')
            const newArr = res.data.map(item => ({id: item.id, name: item.name}));
            //Send selector's data list to SelectDropDownMenu
            this.$bus.$emit('selectorData', newArr)
            //Send selector's data list to SelectDropDownMenu
            this.$bus.$emit('selectorList', newArr)
            this.isLoading = false

        },
        add() {
            this.$bus.$emit('openRB', this.dictKey + 'A')
        },
    },
    mounted() {
        this.getGoodsList()
        this.getCategoryList()
        this.$bus.$on(this.pageDict[this.dictKey].methodName, () => {
            this.getGoodsList()
        })
    }
}

</script>

<style scoped>

</style>