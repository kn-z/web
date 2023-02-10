<template>
  <tr class="ant-table-row ant-table-row-level-0" data-row-key="0">
    <td class="">{{cate.id}}</td>
    <td class="">{{cate.name}}</td>
    <td class=""><i aria-label="图标: database" class="nav-main-link-icon si si-bag"
                    style="cursor: move;">
    </i> {{cate.goodsNum}}
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
  props: ['cate','dictKey','pageDict'],
  data(){
    return{
      focusTo: null,
      statusStyle:null,
    }
  },
  computed:{
  },
  methods:{
    edit(){
      this.$bus.$emit('RBReload')
      this.$bus.$emit('openRB',this.dictKey)
      this.$bus.$emit(this.pageDict[this.dictKey].reloadRBName,this.cate.id)
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>