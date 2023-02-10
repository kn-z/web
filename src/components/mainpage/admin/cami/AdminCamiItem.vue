<template>
  <tr :class=style @mouseover="changeFocus" @mouseleave="clearFocus" data-row-key="0">
    <td class=""><span>{{item.id}}</span></td>
    <td class="ant-table-column-has-actions ant-table-column-has-sorters"><span
        :class=statusStyle >{{status}}</span></td>
    <td class=""><span>{{item.title}}</span></td>
    <td class=""><span style="cursor: pointer;">{{item.cami}}</span></td>
    <td class=""><span>{{item.outTradeNo ? item.outTradeNo : "暂未售出"}}</span></td>
    <td class="ant-table-fixed-columns-in-body ant-table-row-cell-break-word"
        style="text-align: right;">
      <div><a href="javascript:void(0);" class="ant-dropdown-trigger">操作 <i
          aria-label="图标: caret-down" class="anticon anticon-caret-down">
        <svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down"
             width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path
              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
        </svg>
      </i></a></div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "AdminCamiItem",
  props: ['item'],
  data(){
    return{
      focusTo: null,
    }
  },
  computed:{
    style(){
      return (this.focusTo === this.item.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
    },
    status() {
      switch (this.item.status) {
        case 1:
          return "已售"
        case 2:
          return "待售"
        default:
          return "空闲"
      }
    },
    statusStyle(){
      switch (this.item.status) {
        case 1:
          return "ant-tag ant-tag-red"
        case 2:
          return "ant-tag ant-tag-orange"
        default:
          return "ant-tag ant-tag-green"
      }
    },
  },
  methods:{
    setPos(e) {
      let data = {
        isShow: true,
        x: e.x,
        y: e.y,
      }
      this.$bus.$emit('tablePos', data)
    },
    changeFocus(){
      this.$bus.$emit('switchCSIFocus', this.item.id)
    },
    clearFocus(){
      this.$bus.$emit('switchCSIFocus', null)
    },
    async formatInfo(){
    }
  },
  mounted() {
    this.$bus.$on('switchCSFocus',(data)=>{
      this.focusTo = data
    })
  }
}
</script>

<style scoped>

</style>