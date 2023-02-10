<template>
  <tr :class=style data-row-key="0" @mouseover="changeFocus" @mouseleave="clearFocus" @contextmenu.prevent="setPos($event)">
    <td class="ant-table-column-has-actions ant-table-column-has-sorters">{{user.id}}</td>
    <td class=""><span><span class="ant-badge-status-text"></span>{{user.email}}</span></td>
    <td class="ant-table-column-has-actions ant-table-column-has-sorters"><span
        class="ant-tag ant-tag-green">正常</span></td>
    <td class="ant-table-column-has-actions ant-table-column-has-sorters">{{user.role ? '管理员' : '普通用户'}}</td>
    <td class="ant-table-column-has-actions ant-table-column-has-sorters">{{createdAt}}
    </td>
    <td class="ant-table-fixed-columns-in-body" style="text-align: right;"><a
        href="javascript:void(0);" class="ant-dropdown-trigger">操作 <i
        aria-label="图标: caret-down" class="anticon anticon-caret-down">
      <svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down"
           width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <paths
            d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></paths>
      </svg>
    </i></a></td>
  </tr>
</template>

<script>
export default {
  name: "UserItem",
  props: ['user'],
  data(){
    return{
      focusTo: null,
      statusStyle:null,
    }
  },
  computed:{
    style(){
      return (this.focusTo === this.user.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
    },
    createdAt(){
      let dataForm = this.user
      let date =  dataForm.CreatedAt.split('T')[0]
      let time =  dataForm.CreatedAt.split('T')[1]
      return  date + " " + time.split(":")[0] + ":" + time.split(":")[1]
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
      this.$bus.$emit('switchUSIFocus', this.user.id)
    },
    clearFocus(){
      this.$bus.$emit('switchUSIFocus', null)
    },
  },
  mounted() {
    this.$bus.$on('switchUSFocus',(data)=>{
      this.focusTo = data
    })
  }
}
</script>

<style scoped>

</style>