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
                            </i><span> 添加公告</span></button>
                        </div>
                        <div class="ant-table-wrapper">
                            <div class="ant-spin-nested-loading">
                                <div class="ant-spin-container">
                                    <div class="ant-table ant-table-default ant-table-scroll-position-left">
                                        <div class="ant-table-content">
                                            <div class="ant-table-scroll">
                                                <div tabindex="-1" class="ant-table-body" style="overflow-x: scroll;">
                                                    <table class="ant-table-fixed" style="width: 950px;">
                                                        <colgroup>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                            <col>
                                                        </colgroup>
                                                        <thead class="ant-table-thead">
                                                        <tr>
                                                            <th class=""><span class="ant-table-header-column"><div><span
                                                                    class="ant-table-column-title">#</span><span
                                                                    class="ant-table-column-sorter"></span></div></span>
                                                            </th>
                                                            <th class=""><span class="ant-table-header-column"><div><span
                                                                    class="ant-table-column-title">显隐</span><span
                                                                    class="ant-table-column-sorter"></span></div></span>
                                                            </th>
                                                            <th class=""><span class="ant-table-header-column"><div><span
                                                                    class="ant-table-column-title">标题</span><span
                                                                    class="ant-table-column-sorter"></span></div></span>
                                                            </th>
                                                            <th class="ant-table-align-right"
                                                                style="text-align: right;"><span
                                                                    class="ant-table-header-column"><div><span
                                                                    class="ant-table-column-title">创建时间</span><span
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
                                                        <AdminNoticeItem v-for="notice in this.data"
                                                                         :key="notice.id"
                                                                         :notice="notice"/>
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
                                          class="ant-table-column-title">操作</span><span
                                          class="ant-table-column-sorter"></span></div></span></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody class="ant-table-tbody">
                                                            <AdminNoticesSetItem :pageDict="pageDict" :dictKey="dictKey"
                                                                                 v-for="notice in this.data"
                                                                                 :key="notice.id"
                                                                                 :notice="notice"/>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNoticeItem from "@/components/mainpage/admin/notice/AdminNoticeItem";
import AdminNoticesSetItem from "@/components/mainpage/admin/notice/AdminNoticesSetItem";

export default {
    name: "ManageNotice",
    props: ['pageDict'],
    components: {
        AdminNoticeItem,
        AdminNoticesSetItem,
    },
    data() {
        return {
            dictKey: "07",
            data: '',
            isLoading: true,
        }
    },
    methods: {
        async getAllNotice() {
            this.isLoading = true
            const {data: res} = await this.$http.get('notice/all')
            this.data = res.data
            this.isLoading = false
        },
        add() {
            this.$bus.$emit(this.pageDict[this.dictKey].getRBTName, 'A')
            this.$bus.$emit('openRB', this.dictKey)
        },
    },
    mounted() {
        this.getAllNotice()
        this.$bus.$on(this.pageDict[this.dictKey].methodName, () => {
            this.getAllNotice()
        })
    }
}
</script>

<style scoped>

</style>