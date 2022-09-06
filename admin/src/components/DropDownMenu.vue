<template>
  <div class="dropdown-menu dropdown-menu-right p-0 show">
    <div class="p-2" @blur = "Test">
      <DropDownItem v-for="item in items"
                    :key = item.id
                    :item = item
      />
    </div>
  </div>
</template>

<script>
import DropDownItem from "@/components/DropDownItem";

export default {
  name: "DropDownMenu",
  components: {
    DropDownItem
  },
  data(){
    return{
      isLogin: 0,
      items:[
        {id:"001", name:"登录", href:"/#/login"},
        {id:"002", name:"注册", href:"/#/signup"}
      ]
    }
  },
  methods:{
    Test(){
      console.log("1234")
    }
  }
}
</script>

<style scoped>

</style>