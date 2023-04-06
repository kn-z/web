<template>
    <tr :class=style @mouseover="changeFocus" @mouseleave="clearFocus" data-row-key="0" style="height: 54px;">
        <td class="" style="text-align: right;"><a @click="edit"
                                                   class="ant-dropdown-trigger">操作 <i
                aria-label="图标: caret-down" class="anticon anticon-caret-down">
            <svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down"
                 width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path
                        d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
            </svg>
        </i></a></td>
    </tr>
</template>

<script>
export default {
    name: "AdminCamiSetListItem",
    props: ['item', 'dictKey', 'pageDict'],
    data() {
        return {
            focusTo: false,
            cancel: true,
            txt: "取消",
        }
    },
    computed: {
        style() {
            return (this.focusTo === this.item.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
        }
    },
    methods: {
        changeFocus() {
            this.$bus.$emit('switchCSFocus', this.item.id)
        },
        clearFocus() {
            this.$bus.$emit('switchCSFocus', null)
        },
        edit() {
            this.$bus.$emit('selectorID', this.item.goodsId)
            this.$bus.$emit('RBReload')
            this.$bus.$emit(this.pageDict[this.dictKey].reloadRBName, this.item.id)
            this.$bus.$emit( this.pageDict[this.dictKey].getRBTName, 'E')
            this.$bus.$emit('openRB', this.dictKey)
        }
    },
    mounted() {
        this.$bus.$on('switchCSIFocus', (data) => {
            this.focusTo = data
        })
    }
}
</script>

<style scoped>

</style>