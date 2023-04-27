<template>
    <tr :class=style @mouseover="changeFocus" @mouseleave="clearFocus" data-row-key="0" style="height: 54px;">
        <td class="" style="text-align: right;">
            <div><a @click="edit">编辑</a>
                <div class="ant-divider ant-divider-vertical" role="separator"></div>
                <a href="javascript:void(0);">删除</a></div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "AdminGoodsSetListItem",
    props: ['notice', 'dictKey', 'pageDict'],
    data() {
        return {
            focusTo: false,
            cancel: true,
            txt: "取消",
        }
    },
    computed: {
        style() {
            return (this.focusTo === this.notice.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
        }
    },
    methods: {
        changeFocus() {
            this.$bus.$emit('switchNSFocus', this.notice.id)
        },
        clearFocus() {
            this.$bus.$emit('switchNSFocus', null)
        },
        edit() {
            this.$bus.$emit('RBReload')
            this.$bus.$emit(this.pageDict[this.dictKey].reloadRBName, this.notice.id)
            this.$bus.$emit(this.pageDict[this.dictKey].getRBTName, 'E')
            this.$bus.$emit('openRB', this.dictKey)
        }
    },
    mounted() {
        this.$bus.$on('switchNSIFocus', (data) => {
            this.focusTo = data
        })
    }
}
</script>

<style scoped>

</style>