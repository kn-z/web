<template>
  <div class="ant-drawer-body">
    <div class="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator"><span
        class="ant-divider-inner-text">条件1 <i aria-label="图标: delete" tabindex="-1" class="anticon anticon-delete"
                                                style="color: rgb(255, 77, 79);"><svg viewBox="64 64 896 896"
                                                                                      focusable="false" class=""
                                                                                      data-icon="delete" width="1em"
                                                                                      height="1em" fill="currentColor"
                                                                                      aria-hidden="true"><path
        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg></i></span>
    </div>
    <div class="form-group"><label>字段名</label>
      <div>
        <div class="ant-select ant-select-enabled" style="width: 100%;">
          <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
               aria-controls="3aea41f6-8082-4f3a-ea61-1b8c7295bcb5" aria-expanded="false" tabindex="0">
            <div class="ant-select-selection__rendered">
              <div class="ant-select-selection-selected-value" title="邮箱" style="display: block; opacity: 1;">邮箱
              </div>
            </div>
            <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i aria-label="图标: down"
                                                                                           class="anticon anticon-down ant-select-arrow-icon"><svg
                viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em"
                fill="currentColor" aria-hidden="true"><path
                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group"><label>条件</label>
      <div>
        <div class="ant-select ant-select-enabled" style="width: 100%;">
          <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
               aria-controls="07ef4833-0bd8-41aa-f615-30400b7dfc47" aria-expanded="false" tabindex="0">
            <div class="ant-select-selection__rendered">
              <div class="ant-select-selection-selected-value" title="模糊" style="display: block; opacity: 1;">模糊
              </div>
            </div>
            <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i aria-label="图标: down"
                                                                                           class="anticon anticon-down ant-select-arrow-icon"><svg
                viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em"
                fill="currentColor" aria-hidden="true"><path
                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group"><label>欲检索内容</label>
      <div><input placeholder="值" type="text" class="ant-input" value="" style="width: 100%;"></div>
    </div>
    <div class="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator"><span
        class="ant-divider-inner-text">条件2 <i aria-label="图标: delete" tabindex="-1" class="anticon anticon-delete"
                                                style="color: rgb(255, 77, 79);"><svg viewBox="64 64 896 896"
                                                                                      focusable="false" class=""
                                                                                      data-icon="delete" width="1em"
                                                                                      height="1em" fill="currentColor"
                                                                                      aria-hidden="true"><path
        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg></i></span>
    </div>
    <div class="form-group"><label>字段名</label>
      <div>
        <div class="ant-select ant-select-enabled" style="width: 100%;">
          <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
               aria-controls="8f152833-fc13-476e-d136-a9c36d40f2f0" aria-expanded="false" tabindex="0">
            <div class="ant-select-selection__rendered">
              <div class="ant-select-selection-selected-value" title="邮箱" style="display: block; opacity: 1;">邮箱
              </div>
            </div>
            <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i aria-label="图标: down"
                                                                                           class="anticon anticon-down ant-select-arrow-icon"><svg
                viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em"
                fill="currentColor" aria-hidden="true"><path
                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group"><label>条件</label>
      <div>
        <div class="ant-select ant-select-enabled" style="width: 100%;">
          <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
               aria-controls="12d495fa-fc98-4d42-aa75-361853f3ae97" aria-expanded="false" tabindex="0">
            <div class="ant-select-selection__rendered">
              <div class="ant-select-selection-selected-value" title="模糊" style="display: block; opacity: 1;">模糊
              </div>
            </div>
            <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i aria-label="图标: down"
                                                                                           class="anticon anticon-down ant-select-arrow-icon"><svg
                viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em"
                fill="currentColor" aria-hidden="true"><path
                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group"><label>欲检索内容</label>
      <div><input placeholder="值" type="text" class="ant-input" value="" style="width: 100%;"></div>
    </div>
    <button type="button" class="ant-btn ant-btn-primary" style="width: 100%;"
            ant-click-animating-without-extra-node="false"><i aria-label="图标: plus" class="anticon anticon-plus">
      <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="plus" width="1em" height="1em"
           fill="currentColor" aria-hidden="true">
        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
      </svg>
    </i><span> 添加条件</span></button>
    <div class="v2board-drawer-action">
      <button type="button" class="ant-btn ant-btn-danger" style="float: left;"
              ant-click-animating-without-extra-node="false"><span>重 置</span></button>
      <button type="button" class="ant-btn" style="margin-right: 8px;"><span>取 消</span></button>
      <button type="button" class="ant-btn ant-btn-primary"><span>检 索</span></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterSide",
  mounted() {
    this.$bus.$emit('RBLoaded')
  }
}
</script>

<style scoped>

</style>