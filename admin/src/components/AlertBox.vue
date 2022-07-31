<template>
  <div>
    <div class="ant-notification ant-notification-topRight" style="right: 0px; top: 24px; bottom: auto;">
      <span><div class="ant-notification-notice ant-notification-notice-closable">
        <div class="ant-notification-notice-content">
          <div class="ant-notification-notice-with-icon">
            <i aria-label="icon: close-circle-o" class="anticon anticon-close-circle-o ant-notification-notice-icon ant-notification-notice-icon-error">
              <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              </svg>
            </i>
            <div class="ant-notification-notice-message">{{alertTitle}}</div>
            <div class="ant-notification-notice-description">{{alertMsg}}</div>
          </div>
        </div>
        <a tabindex="0" class="ant-notification-notice-close">
          <span class="ant-notification-close-x">
            <i aria-label="icon: close" class="anticon anticon-close ant-notification-close-icon">
            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" @click="close">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
            </i>
          </span>
        </a>
      </div>
      </span>
    </div>
  </div>
</template>

<script>


export default {
  name: "AlertBox",
  props:['alertTitle','alertMsg'],
  methods:{
    close() {
      this.$emit('closeAlert')
    }
  }
}

</script>

<style scoped>

</style>