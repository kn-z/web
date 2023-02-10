<template>
  <ul class="ant-pagination ant-table-pagination mini" unselectable="unselectable">
    <li @click=jumpPage(-1) title="上一页" :class="flag===1 ? 'ant-pagination-disabled ant-pagination-prev' : 'ant-pagination-prev'" :aria-disabled="flag<=1"><a
        class="ant-pagination-item-link"><i aria-label="图标: left" class="anticon anticon-left">
      <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em"
           fill="currentColor" aria-hidden="true">
        <path
            d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
      </svg>
    </i></a></li>

    <li @click="reload(1)" title="1"
        :class="flag===1 ? 'ant-pagination-item ant-pagination-item ant-pagination-item-active' : 'ant-pagination-item ant-pagination-item'"
        tabindex="0"><a>1</a></li>
    <li @click=jumpPage(-5) v-show="(flag-1)>4" title="向前 5 页" tabindex="0"
        class="ant-pagination-jump-prev ant-pagination-jump-prev-custom-icon"><a
        class="ant-pagination-item-link">
      <div class="ant-pagination-item-container"><i aria-label="图标: double-left"
                                                    class="anticon anticon-double-left ant-pagination-item-link-icon">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="double-left" width="1em" height="1em"
             fill="currentColor" aria-hidden="true">
          <path
              d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"></path>
        </svg>
      </i><span class="ant-pagination-item-ellipsis">•••</span></div>
    </a></li>
    <PageNoItem v-show="fin!==1" :dictKey="dictKey" :pageDict="pageDict" :flag="flag" v-for="no in nums"
                :key="no"
                :no="no"
    />
    <li @click=jumpPage(5) v-show="(fin-flag)>4" title="向后 5 页" tabindex="0"
        class="ant-pagination-jump-next ant-pagination-jump-next-custom-icon"><a
        class="ant-pagination-item-link">
      <div class="ant-pagination-item-container"><i aria-label="图标: double-right"
                                                    class="anticon anticon-double-right ant-pagination-item-link-icon">
        <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="double-right" width="1em"
             height="1em" fill="currentColor" aria-hidden="true">
          <path
              d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path>
        </svg>
      </i><span class="ant-pagination-item-ellipsis">•••</span></div>
    </a></li>
    <li v-show="fin>1" @click="reload(fin)" :title=fin
        :class="flag===fin ? 'ant-pagination-item ant-pagination-item ant-pagination-item-active' : 'ant-pagination-item ant-pagination-item'"
        tabindex="0"><a>{{ fin }}</a></li>

    <li @click=jumpPage(1) title="下一页" tabindex="0" :class="flag===fin ? 'ant-pagination-disabled ant-pagination-prev' : 'ant-pagination-prev'" :aria-disabled="flag>=fin"><a
        class="ant-pagination-item-link"><i aria-label="图标: right" class="anticon anticon-right">
      <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em"
           fill="currentColor" aria-hidden="true">
        <path
            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
      </svg>
    </i></a></li>
  </ul>
</template>

<script>
import PageNoItem from "@/components/tools/pagenoitem/PageNoItem";

export default {
  name: "PageNo",
  components: {PageNoItem},
  props: ['count','dictKey','pageDict'],
  data() {
    return {
      flag: 1,
    }
  },
  watch:{
    flag(newFlag){
      this.$bus.$emit(this.pageDict[this.dictKey].methodName,newFlag)
    }
  },
  computed: {
    fin() {
      return parseFloat(this.count) % 10 === 0 ? parseInt(parseInt(this.count) / 10) : parseInt(parseInt(this.count) / 10) + 1
    },
    nums() {
      const range = []
      if (this.flag - 2 > 1) {
        range.push(this.flag - 2)
      }
      if (this.flag - 1 > 1) {
        range.push(this.flag - 1)
      }
      if (this.flag > 1 && this.flag < this.fin) {
        range.push(this.flag)
      }
      if (this.flag + 1 < this.fin) {
        range.push(this.flag + 1)
      }
      if (this.flag + 2 < this.fin) {
        range.push(this.flag + 2)
      }
      return range
    },
  },
  methods: {
    setFlag(flag) {
      this.flag = flag
    },
    jumpPage(num){
      this.flag += num
    },
    reload(no){
      this.flag = no
    }
  },
  mounted() {
    this.$bus.$on('setPN', (data) => {
      if (!data){
        return
      }
      this.setFlag(data)
    })
  }
}
</script>

<style scoped>

</style>