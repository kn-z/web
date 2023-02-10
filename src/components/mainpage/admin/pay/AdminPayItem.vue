<template>
  <tr :class=style @mouseover="changeFocus" @mouseleave="clearFocus" data-row-key="0">
    <td class=""><i aria-label="图标: menu" class="anticon anticon-menu" style="cursor: move;">
      <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="menu" width="1em" height="1em"
           fill="currentColor" aria-hidden="true">
        <path
            d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
      </svg>
    </i></td>
    <td class="ant-table-column-has-actions ant-table-column-has-filters ant-table-row-cell-break-word"><span><span class="ant-tag ant-tag-has-color" style="background-color: rgb(203, 49, 128);">{{goods.name}}</span></span></td>
    <td class="">
      <button type="button" role="switch" aria-checked="false" :class="goods.status ? 'ant-switch-small ant-switch ant-switch-checked':'ant-switch-small ant-switch'"><span
          class="ant-switch-inner"></span></button>
    </td>
    <td class="">{{ goods.title }}</td>

    <td class="">{{ goods.price / 100 }}</td>
    <td class=""><i aria-label="图标: database" class="anticon anticon-database" style="cursor: move;">
      <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="database" width="1em" height="1em"
           fill="currentColor" aria-hidden="true">
        <path
            d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path>
      </svg>
    </i> {{ goods.stock }}
    </td>
    <td class="">{{goods.content}}</td>
    <td class="ant-table-fixed-columns-in-body" style="text-align: right;"><a href="javascript:void(0);"
                                                                              class="ant-dropdown-trigger">操作 <i
        aria-label="图标: caret-down" class="anticon anticon-caret-down">
      <svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em"
           fill="currentColor" aria-hidden="true">
        <path
            d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
      </svg>
    </i></a></td>
  </tr>
</template>

<script>
export default {
  name: "AdminGoodListItem",
  props: ['goods'],
  data(){
    return{
      focusTo: null,
      statusStyle:null,
    }
  },
  computed:{
    style(){
      return (this.focusTo === this.goods.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
    }
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
      this.$bus.$emit('switchGSIFocus', this.goods.id)
    },
    clearFocus(){
      this.$bus.$emit('switchGSIFocus', null)
    },
    async formatInfo(){
    }
  },
  mounted() {
    this.$bus.$on('switchGSFocus',(data)=>{
      this.focusTo = data
    })
  }
}
</script>

<style scoped>

</style>