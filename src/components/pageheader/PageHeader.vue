<template>
  <header id="page-header">
    <div class="content-header"  style="max-width: unset;">
      <div class="sidebar-toggle" style="display: none;">
        <button type="button" class="btn btn-primary mr-1 d-lg-none" @click="OpenSide">
          <i class="fa fa-fw fa-bars"></i></button>
      </div>
      <div class="v2board-container-title text-white">{{ title }}</div>
      <div>
        <div tabindex="0" class="dropdown d-inline-block" v-clickOutSide="closeDDM">
          <button type="button"
                  class="btn btn-primary"
                  id="page-header-user-dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  @click="switchDDM"
          >
            <i class="far fa fa-user-circle"></i>
            <span class="d-none d-lg-inline ml-1">{{ email }}</span>
            <i class="fa fa-fw fa-angle-down ml-1"></i></button>
          <DropDownList :isLogin=isLogin v-if="showDDM"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DropDownList from "@/components/pageheader/DropDownList";

export default {
  name: "PageHeader",
  props: ["email", "isLogin", "sideDict"],
  components: {
    DropDownList
  },
  data() {
    return {
      title: '',
      showDDM: false,
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
  methods: {
    OpenSide() {
      this.$bus.$emit('switchSide', 1)
    },
    switchDDM() {
      this.showDDM = !this.showDDM
    },
    closeDDM() {
      this.showDDM = 0
    },
  },
  mounted() {
    this.$bus.$on('changeTitle', (data) => {
      this.title = data
    })
    this.$bus.$on('closeDDM', () => {
      this.showDDM = 0
    })
  }
}
</script>

<style scoped>

</style>
