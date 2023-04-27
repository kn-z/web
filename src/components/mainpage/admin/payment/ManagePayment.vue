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
                            </i><span> 添加支付方式</span></button>
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
                                                            </colgroup>
                                                            <thead class="ant-table-thead">
                                                            <tr>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">ID</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">启用</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">显示名称</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title">支付接口</span><span
                                                                        class="ant-table-column-sorter"></span></div></span>
                                                                </th>
                                                                <th class=""><span class="ant-table-header-column"><div><span
                                                                        class="ant-table-column-title"><span>通知地址 <i
                                                                        aria-label="图标: question-circle"
                                                                        class="anticon anticon-question-circle"><svg
                                                                        viewBox="64 64 896 896" focusable="false"
                                                                        class="" data-icon="question-circle"
                                                                        width="1em" height="1em" fill="currentColor"
                                                                        aria-hidden="true"><path
                                                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                                                                        d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg></i></span></span><span
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
                                                            <AdminPaymentItem :pageDict="pageDict"
                                                                              :dictKey="dictKey"
                                                                              v-for="payment in this.data"
                                                                              :key="payment.id"
                                                                              :payment="payment"/>
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
                                                                <AdminPaymentSetItem :pageDict="pageDict"
                                                                                     :dictKey="dictKey"
                                                                                     v-for="payment in this.data"
                                                                                     :key="payment.id"
                                                                                     :payment="payment"/>
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
        <div :style="showLine ? 'position: fixed; z-index: 9999; height: 0px; margin-top: -1px; border-bottom: 2px dashed rgba(0, 0, 0, 0.3); display: block; left: 274px; width: 1300px; top: 300px;' : 'position: fixed; z-index: 9999; height: 0px; margin-top: -1px; border-bottom: 2px dashed rgba(0, 0, 0, 0.3); display: none; left: 274px; width: 1300px; top: 300px;'"
             class=""></div>
    </div>
</template>

<script>
import AdminPaymentItem from "@/components/mainpage/admin/payment/AdminPaymentItem.vue";
import AdminPaymentSetItem from "@/components/mainpage/admin/payment/AdminPaymentSetItem.vue";
import AdminNoticeItem from "@/components/mainpage/admin/notice/AdminNoticeItem.vue";
import AdminGoodsItem from "@/components/mainpage/admin/goods/AdminGoodsItem.vue";

export default {
    name: "ManagePayment",
    props: ['pageDict'],
    components: {
        AdminGoodsItem,
        AdminNoticeItem,
        AdminPaymentItem,
        AdminPaymentSetItem,
    },
    data() {
        return {
            dictKey: "06",
            data: '',
            isLoading: true,
            showLine: false,
        }
    },
    methods: {
        async getAllPayment() {
            this.isLoading = true
            const {data: res} = await this.$http.get('payment/all')
            this.data = res.data
            this.isLoading = false
        },
        getPaymentTypeList() {
            const newArr = [
                {id: 0, name: 'Alipay'},
                {id: 1, name: 'Wechat Pay'},]
            //Send selector's data list to SelectDropDownMenu
            this.$bus.$emit('selectorData', newArr)
            //Send selector's data list to SelectDropDownMenu
            this.$bus.$emit('selectorList', newArr)
        },
        add() {
            this.$bus.$emit(this.pageDict[this.dictKey].getRBTName, 'A')
            this.$bus.$emit('openRB', this.dictKey)
        },
    },
    mounted() {
        this.getAllPayment()
        this.getPaymentTypeList()
        this.$bus.$on(this.pageDict[this.dictKey].methodName, () => {
            this.getAllPayment()
        })
    }

}
</script>

<style scoped>

</style>