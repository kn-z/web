<template>
    <tr class="ant-table-row ant-table-row-level-0" data-row-key="0">
        <td class="">{{ cate.id }}</td>
        <td class="">
            <button @click="changeStatus" type="button" role="switch" aria-checked="false"
                    :class="status ? 'ant-switch-small ant-switch ant-switch-checked':'ant-switch-small ant-switch'"><span
                class="ant-switch-inner"></span></button>
        </td>
        <td class="">{{ cate.name }}</td>
        <td class=""><i aria-label="图标: database" class="nav-main-link-icon si si-bag"
                        style="cursor: move;">
        </i> {{ cate.goodsNum }}
        </td>
        <td class="" style="text-align: right;">
            <div><a @click="edit" href="javascript:void(0);">编辑</a>
                <div class="ant-divider ant-divider-vertical" role="separator"></div>
                <a href="javascript:void(0);">删除</a></div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "AdminGoodListItem",
    props: ['cate', 'dictKey', 'pageDict'],
    data() {
        return {
            focusTo: null,
            status: '',
        }
    },
    computed: {},
    methods: {
        async submit() {
            const {data: res} = await this.$http.put('category/' + this.cate.id, {
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

        edit() {
            this.$bus.$emit('RBReload')
            this.$bus.$emit(this.pageDict[this.dictKey].reloadRBName, this.cate.id)
            this.$bus.$emit( this.pageDict[this.dictKey].getRBTName, 'E')
            this.$bus.$emit('openRB', this.dictKey)
        },

        changeStatus() {
            this.status = 1 - this.status
            this.submit()
        }
    },
    mounted() {
        this.status = this.cate.status
    }
}
</script>

<style scoped>

</style>