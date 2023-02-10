<template>
  <div>
    <div id="user"  canceltext="取消" tabindex="-1"
         :class="isShow ? 'ant-drawer ant-drawer-right ant-drawer-open' : 'ant-drawer ant-drawer-right'">
      <div class="ant-drawer-mask" @click="close"></div>
      <div class="ant-drawer-content-wrapper"
           :style="isShow ? 'width:' +scale+';' : 'width: '+scale +'; transform: translateX(100%);'">
        <div class="ant-drawer-content" style="min-width: 100px;">
          <div class="ant-drawer-wrapper-body">
            <div class="ant-drawer-header">
              <div class="ant-drawer-title">{{ page.name }}</div>
              <button aria-label="Close" class="ant-drawer-close" @click="close"><i aria-label="图标: close"
                                                                                    class="anticon anticon-close">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em"
                     fill="currentColor" aria-hidden="true">
                  <path
                      d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </i></button>
            </div>
            <div v-show="isLoading" class="ant-drawer-body"><i aria-label="图标: loading"
                                                               class="anticon anticon-loading"
                                                               style="font-size: 24px; color: rgb(65, 90, 148);">
              <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-icon="loading" width="1em"
                   height="1em" fill="currentColor" aria-hidden="true">
                <path
                    d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
              </svg>
            </i></div>
            <FilterSide v-show="page.type==='01F'"/>
            <EditUser :dictKey="'01'" :pageDict="pageDict" v-show="page.type==='01' && !this.isLoading"/>
            <AddUser :dictKey="'01'" :pageDict="pageDict" v-show="page.type==='01A'"/>
            <EditGoods :dictKey="'02'" :pageDict="pageDict" v-show="page.type==='02' && !this.isLoading"/>
            <AddGoods :dictKey="'02'" :pageDict="pageDict" v-show="page.type==='02A'"/>
            <EditCami :dictKey="'03'" :pageDict="pageDict" v-show="page.type==='03' && !this.isLoading"/>
            <AddCami :dictKey="'03'" :pageDict="pageDict" v-show="page.type==='03A'"/>
            <AddOrder :dictKey="'04'" :pageDict="pageDict" v-show="page.type==='04A'"/>
            <EditCategory :dictKey="'05'" :pageDict="pageDict" v-show="page.type==='05' && !this.isLoading"/>
            <AddCategory :dictKey="'05'" :pageDict="pageDict" v-show="page.type==='05A'"/>
            <EditPay :dictKey="'06'" :pageDict="pageDict" v-show="page.type==='06' && !this.isLoading"/>
            <AddPay :dictKey="'06'" :pageDict="pageDict" v-show="page.type==='06A'"/>
            <EditNotice :dictKey="'07'" :pageDict="pageDict" v-show="page.type==='07' && !this.isLoading"/>
            <AddNotice :dictKey="'07'" :pageDict="pageDict" v-show="page.type==='07A'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterSide from "@/components/tools/rightbar/FilterSide";

import EditUser from "@/components/tools/rightbar/EditUser";
import AddUser from "@/components/tools/rightbar/AddUser";

import EditGoods from "@/components/tools/rightbar/EditGoods";
import AddGoods from "@/components/tools/rightbar/AddGoods";

import EditCami from "@/components/tools/rightbar/EditCami";
import AddCami from "@/components/tools/rightbar/AddCami";

import AddOrder from "@/components/tools/rightbar/AddOrder";

import EditCategory from "@/components/tools/rightbar/EditCategory";
import AddCategory from "@/components/tools/rightbar/AddCategory";

import EditNotice from "@/components/tools/rightbar/EditNotice";
import AddNotice from "@/components/tools/rightbar/AddNotice";

import EditPay from "@/components/tools/rightbar/EditPay";
import AddPay from "@/components/tools/rightbar/AddPay";

import SelectDropDownMenu from "@/components/tools/SelectDropDownMenu";

export default {
  name: "RightBar",
  props: ['pageDict'],
  components: {
    FilterSide,
    EditUser,
    AddUser,
    EditGoods,
    AddGoods,
    EditCami,
    AddCami,
    AddOrder,
    EditCategory,
    AddCategory,
    EditNotice,
    AddNotice,
    EditPay,
    AddPay,
  },
  data() {
    return {
      isLoading: true,
      isShow: false,
      scale: '',
      page: {type: "", name: ""},
      isMobile:'',
    }
  },
  watch:{
    isMobile(newM){
      if (newM){
        this.scale = '80%'
      }
      else {
        this.scale = '500px'
      }
    }
  },
  methods: {
    close() {
      this.isShow = false
      this.$bus.$emit('switchTop', true)
      setTimeout(() => {
        this.$bus.$emit('clearEU')
      }, 300);
    },
  },

  mounted() {
    this.$bus.$on('openRB', (type) => {
      this.isShow = true
      this.page.type = type
      if (type.indexOf('F') > -1 || type.indexOf('A') > -1) {
        this.isLoading = false
      }
      this.page.name = this.pageDict[type].name
      this.$bus.$emit('switchTop', false)
    })
    this.$bus.$on('closeRB', () => {
      this.close()
    })
    this.$bus.$on('RBLoaded', () => {
      this.isLoading = false
    })
    this.$bus.$on('RBReload', () => {
      this.isLoading = true
    })
    this.$bus.$on('rightBarGetSize',(data)=>{
      this.isMobile = data < 500
    })
  },
  beforeDestroy() {
    // window.removeEventListener("resize", this.resizeHandle);
  }
}
</script>

<style scoped>

</style>