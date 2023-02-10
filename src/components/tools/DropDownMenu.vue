<template>
  <div id="v2board-table-dropdown" class="ant-dropdown ant-dropdown-placement-bottomLeft"
       :style="tableDropDown.isShow ? 'top: '+tableDropDown.y+'px; left: '+tableDropDown.x+'px; display: unset;' : 'display: none; position: fixed; top: 0px; left: 0px;'">
    <ul class="ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical" ref="tableDropDown" v-click-out-side="close">
      <li class="ant-dropdown-menu-item"><a><i aria-label="图标: edit" class="anticon anticon-edit">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="edit" width="1em" height="1em"
             fill="currentColor" aria-hidden="true">
          <path
              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
        </svg>
      </i> 编辑</a></li>

      <li class="ant-dropdown-menu-item"><a><i aria-label="图标: plus" class="anticon anticon-plus">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="plus" width="1em" height="1em"
             fill="currentColor" aria-hidden="true">
          <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
          <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
        </svg>
      </i> 分配订单</a></li>
      <li class="ant-dropdown-menu-item"><a><i aria-label="图标: copy" class="anticon-copy">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="copy" width="1em" height="1em"
             fill="currentColor" aria-hidden="true">
          <path
              d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
        </svg>
      </i> 复制订阅URL</a></li>
      <li class="ant-dropdown-menu-item"><a style="color: rgb(255, 77, 79);"><i aria-label="图标: reload"
                                                                                class="anticon anticon-reload">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="reload" width="1em" height="1em"
             fill="currentColor" aria-hidden="true">
          <path
              d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path>
        </svg>
      </i> 重置UUID及订阅URL</a></li>
      <li class="ant-dropdown-menu-item"><a><i aria-label="图标: account-book"
                                               class="anticon anticon-account-book">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="account-book" width="1em"
             height="1em" fill="currentColor" aria-hidden="true">
          <path
              d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z"></path>
        </svg>
      </i> TA的订单</a></li>
      <li class="ant-dropdown-menu-item"><a><i aria-label="图标: usergroup-add"
                                               class="anticon anticon-usergroup-add">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="usergroup-add" width="1em"
             height="1em" fill="currentColor" aria-hidden="true">
          <path
              d="M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"></path>
        </svg>
      </i> TA的邀请</a></li>
      <li class="ant-dropdown-menu-item"><a><i aria-label="图标: solution" class="anticon anticon-solution">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="solution" width="1em" height="1em"
             fill="currentColor" aria-hidden="true">
          <path
              d="M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"></path>
        </svg>
      </i> TA的流量记录</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropDownMenu",
  data() {
    return {
      tableDropDown: {
        isShow: false,
        x: 0,
        y: 0,
      },
    }
  },
  directives: {
    clickOutSide: {
      bind(el, binding) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false
          }
          if (binding.expression) {
            binding.value(e)
          }
        }
        el.__vueClickOutSize__ = documentHandler
        document.addEventListener('click', documentHandler)
      },
      unbind(el) {
        document.removeEventListener('click', el.__vueClickOutSize__)
        delete  el.__vueClickOutSize__
      }
    }
  },
  methods:{
    close(){
      this.tableDropDown.isShow = false
    }
  },
  mounted() {
    const w = this.$refs.tableDropDown.clientWidth
    this.$bus.$on('tablePos', (data) => {
      this.tableDropDown.isShow = data.isShow
      this.tableDropDown.x = data.x
      this.tableDropDown.y = data.y
    })
    this.$bus.$on('tablePosRight', (data) => {
      this.tableDropDown.isShow = data.isShow
      this.tableDropDown.x = data.x - w
      this.tableDropDown.y = data.y
    })
    this.$bus.$on('tableClose', () => {
      this.tableDropDown.isShow = false
    })
  }
}
</script>

<style scoped>

</style>