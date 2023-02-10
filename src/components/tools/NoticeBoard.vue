<template>
  <div class="row mb-3 mb-md-0">
    <div class="col-12 mb-sm-4">
      <div class="ant-carousel">
        <div class="slick-slider slick-initialized" dir="ltr" id="noticeBoard" ref="noticeBoard">
          <div class="slick-list">
            <div class="slick-track"
                 :style="'width:' +width*(count+1)+'px; opacity: 1; transform: translate3d(-'+width*(flag)+'px, 0px, 0px); transition: -webkit-transform 500ms ease 0s;'">
              <BoardItem :flag=flag :width=width v-if="!isLoading"
                         v-for="index in Array.from({length: count}, (_, i) => i)"
                         :key="index"
                         :index="index"
                         :notice=noticeList[index]

              />
            </div>
          </div>
          <ul class="slick-dots slick-dots-bottom" style="display: block;">
            <BoardIndexItem :flag=flag
                            v-for="index in Array.from({length: count}, (_, i) => i)"
                            :key="index"
                            :index="index"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoardItem from "@/components/tools/noticeboard/BoardItem";
import BoardIndexItem from "@/components/tools/noticeboard/BoardIndexItem";

export default {
  name: "NoticeBoard",
  components: {
    BoardItem,
    BoardIndexItem,
  },
  data() {
    return {
      isLoading:true,
      noticeList: [],
      width: 0,
      count: 0,
      flag: 0,
    }
  },
  methods: {
    async getNotices() {
      let url = 'notice/list?pageSize=&pageNum='
      const {data: res} = await this.$http.get(url)
      this.noticeList = res.data
      this.isLoading = false
      this.count = this.noticeList.length
    },

    startTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.slideBoard()
      }, 10000);
    },

    boardResizeHandle() {
      this.width = this.$refs.noticeBoard.offsetWidth
    },

    slideBoard() {
      if (this.flag < this.count - 1) {
        this.flag += 1
      } else {
        this.flag = 0
      }
    }
  },

  mounted() {
    this.getNotices()
    this.startTimer()
    this.boardResizeHandle();
    window.addEventListener("resize", this.boardResizeHandle);
    this.$bus.$on('slideTo', (data) => {
      this.flag = data
    })
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.boardResizeHandle);
    clearInterval(this.timer)
  },
}
</script>

<style scoped>

</style>
