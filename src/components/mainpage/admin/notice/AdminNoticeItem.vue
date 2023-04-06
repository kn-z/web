<template>
  <tr :class=style @mouseover="changeFocus" @mouseleave="clearFocus" data-row-key="0">
    <td class="">{{ notice.id }}</td>

      <td class="">
          <button @click="changeStatus" type="button" role="switch" aria-checked="true"
                  :class="status ? 'ant-switch-small ant-switch ant-switch-checked':'ant-switch-small ant-switch'"><span
                  class="ant-switch-inner"></span></button>
      </td>
      <td class="">{{ notice.title }}</td>
    <td class="" style="text-align: right;">{{ createdAt }}</td>
    <td class="ant-table-fixed-columns-in-body" style="text-align: right;">
      <div><a href="javascript:void(0);">编辑</a>
        <div class="ant-divider ant-divider-vertical" role="separator"></div>
        <a href="javascript:void(0);">删除</a></div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "AdminNoticeItem",
  props: ['notice'],
  data() {
    return {
      focusTo: null,
      statusStyle: null,
      status:'',
    }
  },
  computed: {
    style() {
      return (this.focusTo === this.notice.id) ? 'ant-table-row ant-table-row-hover ant-table-row-level-0' : 'ant-table-row ant-table-row-level-0'
    },
    createdAt() {
      let dataForm = this.notice
      let date = dataForm.CreatedAt.split('T')[0]
      let time = dataForm.CreatedAt.split('T')[1]
      return date + " " + time.split(":")[0] + ":" + time.split(":")[1]
    },
  },
  methods: {
    async submit() {
      const {data: res} = await this.$http.put('notice/' + this.notice.id, {
        "status": this.status,
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
    changeFocus() {
      this.$bus.$emit('switchNSIFocus', this.notice.id)
    },
    clearFocus() {
      this.$bus.$emit('switchNSIFocus', null)
    },
    changeStatus() {
      this.status = 1 - this.status
      this.submit()
    },
  },
  mounted() {
    this.status = this.notice.status
    this.$bus.$on('switchNSFocus', (data) => {
      this.focusTo = data
    })
  }
}
</script>

<style scoped>

</style>