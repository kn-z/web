<template>
  <div class="dropdown-menu dropdown-menu-right p-0 show">
    <div class="p-2">
      <DropDownItem v-for="item in items"
                    :key = item.id
                    :item = item
      />
    </div>
  </div>
</template>

<script>
import DropDownItem from "@/components/pageheader/DropDownItem";

export default {
  name: "DropDownMenu",
  props:["isLogin"],
  components: {
    DropDownItem
  },
  data(){
    return{
      items:null,
    }
  },
  mounted() {
    if (this.isLogin){
      if (this.$route.fullPath.indexOf('/backend/') !== -1){
        this.items = [
          {id:"001", name:"登出", href:"/#/admin", icon:"fa fa-fw fa-sign-out-alt text-danger ml-1"},
        ]
      }
      else {
        this.items = [
          {id:"001", name:"登出", href:"/#/login", icon:"far fa-fw fa-arrow-alt-circle-left mr-1"},
        ]
      }
    }
    else {
      this.items = [
        {id:"001", name:"登录", href:"/#/login", icon:"far fa-fw fa-user mr-1"},
      ]
    }
  }
}
</script>

<style scoped>

</style>
