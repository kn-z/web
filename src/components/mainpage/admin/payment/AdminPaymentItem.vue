<template>
    <tr :class=style @mouseover="changeFocus" @mouseleave="clearFocus"
        data-row-key="0">
        <td class=""><i aria-label="图标: menu"
                        class="anticon anticon-menu"
                        style="cursor: move;">
            <svg viewBox="64 64 896 896" focusable="false"
                 class="" data-icon="menu" width="1em"
                 height="1em" fill="currentColor"
                 aria-hidden="true">
                <path
                        d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
        </i> {{ payment.id }}
        </td>
        <td class="">
            <button @click="changeStatus" type="button" role="switch"
                    aria-checked="false"
                    :class="status ? 'ant-switch-small ant-switch ant-switch-checked':'ant-switch-small ant-switch'"><span
                    class="ant-switch-inner"></span>
            </button>
        </td>
        <td class="">{{ payment.name }}</td>
        <td>{{ type }}</td>
        <td class="">
            {{ payment.notify_domain + '/payment/notify/' + payment.id }}
        </td>
        <td class="ant-table-fixed-columns-in-body" style="text-align: right;"><a href="javascript:void(0);">编辑</a>
            <div class="ant-divider ant-divider-vertical" role="separator"></div>
            <a href="javascript:void(0)">删除</a></td>
    </tr>
</template>

<script>

export default {
    name: "AdminPaymentItem",
    props: ['payment', 'dictKey', 'pageDict'],
    data() {
        return {
            status: '',
            focusTo: null,
            statusStyle: null,
        }
    },
    computed: {
        style() {
            return (this.focusTo === this.payment.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
        },
        type() {
            return (this.payment.type === 0) ? 'Alipay' : 'Wechat Pay'
        }
    },
    methods: {
        async submit() {
            const {data: res} = await this.$http.put('payment/' + this.payment.id, {
                "status": this.status
            })
            if (res.status !== 200) {
                let tip = {
                    tipTitle: "请求失败",
                    tipMsg: res.message,
                    type: false,
                }
                this.$bus.$emit('showTipMsg', tip)
            }
        },
        setPos(e) {
            let data = {
                isShow: true,
                x: e.x,
                y: e.y,
            }
            this.$bus.$emit('tablePos', data)
        },
        changeStatus() {
            this.status = 1 - this.status
            this.submit()
        },
        changeFocus() {
            this.$bus.$emit(this.pageDict[this.dictKey].switchSetFocus, this.payment.id)
        },
        clearFocus() {
            this.$bus.$emit(this.pageDict[this.dictKey].switchSetFocus, null)
        },
        async formatInfo() {
        }
    },
    mounted() {
        this.status = this.payment.status
        this.$bus.$on(this.pageDict[this.dictKey].switchItemFocus, (data) => {
            this.focusTo = data
        })
    }
}
</script>

<style scoped>

</style>