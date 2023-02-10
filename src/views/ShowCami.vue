<template>
  <div id="root">
    <div>
      <div class="block-content-full bg-gray-lighter p-3"><span class="tag___12_9H">查看卡密</span>
      </div>
      <div
          class="bg-white js-chat-messages block-content block-content-full text-wrap-break-word overflow-y-auto content___DW5w1">
        <CamiItem v-for="data in dataset"
                  :key="data.id"
                  :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CamiItem from "@/components/tools/CamiItem";

export default {
  name: "ShowCami",
  components: {CamiItem},
  data() {
    return {
      dataset: null
    }
  },
  methods: {
    async getCami() {
      if (this.$route.fullPath.indexOf("/items/") !== -1) {
        const outTradeNo = this.$route.fullPath.split('/')[2];
        const {data: res} = await this.$http.get("items/" + outTradeNo)
        if (res.status !== 200) {
          console.log(res.message)
        } else {
          this.dataset = res.data
        }
      }
    },
  },
  mounted() {
    this.getCami()
  },
}
</script>

<style scoped>

</style>