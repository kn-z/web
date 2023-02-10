<template>
  <div class="p-0 p-lg-4">
    <div class="d-flex justify-content-between align-items-center"></div>
    <div class="ant-spin-nested-loading">
      <div class="ant-spin-container">
        <div class="block block-rounded">
          <div class="bg-white">
            <div style="padding: 15px;">
              <button type="button" class="ant-btn"><i aria-label="图标: plus" class="anticon anticon-plus">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="plus" width="1em" height="1em"
                     fill="currentColor" aria-hidden="true">
                  <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                  <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                </svg>
              </i><span> 添加支付方式</span></button>
            </div>
            <div role="presentation">
              <div class="ant-table-wrapper">
                <div class="ant-spin-nested-loading">
                  <div class="ant-spin-container">
                    <div class="ant-table ant-table-default ant-table-scroll-position-left">
                      <div class="ant-table-content">
                        <div class="ant-table-scroll">
                          <div tabindex="-1" class="ant-table-body" style="overflow-x: scroll;">
                            <table class="ant-table-fixed" style="width: 1300px;">
                              <colgroup>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                              </colgroup>
                              <thead class="ant-table-thead">
                              <tr>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">ID</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">启用</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">显示名称</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">支付接口</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class=""><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title"><span>通知地址 <i aria-label="图标: question-circle"
                                                                                     class="anticon anticon-question-circle"><svg
                                    viewBox="64 64 896 896" focusable="false" class="" data-icon="question-circle"
                                    width="1em" height="1em" fill="currentColor" aria-hidden="true"><path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                                    d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg></i></span></span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                                <th class="ant-table-fixed-columns-in-body ant-table-align-right ant-table-row-cell-last"
                                    style="text-align: right;"><span class="ant-table-header-column"><div><span
                                    class="ant-table-column-title">操作</span><span
                                    class="ant-table-column-sorter"></span></div></span></th>
                              </tr>
                              </thead>
                              <tbody class="ant-table-tbody">
                              <tr class="ant-table-row ant-table-row-level-0" data-row-key="0">
                                <td class=""><i aria-label="图标: menu" class="anticon anticon-menu"
                                                style="cursor: move;">
                                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="menu" width="1em"
                                       height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                                  </svg>
                                </i> 1
                                </td>
                                <td class="">
                                  <button type="button" role="switch" aria-checked="false"
                                          class="ant-switch-small ant-switch"><span class="ant-switch-inner"></span>
                                  </button>
                                </td>
                                <td class="">支付宝</td>
                                <td class="">AlipayF2F</td>
                                <td class="">
                                  https://api.kncloud.top/api/v1/guest/payment/notify/AlipayF2F/ece565d7b28ae74c4775dcd65d9d90e1
                                </td>
                                <td class="ant-table-fixed-columns-in-body" style="text-align: right;"><a
                                    href="javascript:void(0);">编辑</a>
                                  <div class="ant-divider ant-divider-vertical" role="separator"></div>
                                  <a href="javascript:void(0)">删除</a></td>
                              </tr>
                              <tr class="ant-table-row ant-table-row-level-0" data-row-key="1">
                                <td class=""><i aria-label="图标: menu" class="anticon anticon-menu"
                                                style="cursor: move;">
                                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="menu" width="1em"
                                       height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                                  </svg>
                                </i> 2
                                </td>
                                <td class="">
                                  <button type="button" role="switch" aria-checked="true"
                                          class="ant-switch-small ant-switch ant-switch-checked"><span
                                      class="ant-switch-inner"></span></button>
                                </td>
                                <td class="">Alipay</td>
                                <td class="">AlipayF2F</td>
                                <td class="">
                                  https://api.kncloud.top/api/v1/guest/payment/notify/AlipayF2F/83bdcea566eff4ab93b7940957c9de53
                                </td>
                                <td class="ant-table-fixed-columns-in-body" style="text-align: right;"><a
                                    href="javascript:void(0);">编辑</a>
                                  <div class="ant-divider ant-divider-vertical" role="separator"></div>
                                  <a href="javascript:void(0)">删除</a></td>
                              </tr>
                              <tr class="ant-table-row ant-table-row-level-0" data-row-key="2">
                                <td class=""><i aria-label="图标: menu" class="anticon anticon-menu"
                                                style="cursor: move;">
                                  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="menu" width="1em"
                                       height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                                  </svg>
                                </i> 3
                                </td>
                                <td class="">
                                  <button type="button" role="switch" aria-checked="false"
                                          class="ant-switch-small ant-switch"><span class="ant-switch-inner"></span>
                                  </button>
                                </td>
                                <td class="">Wechat Pay</td>
                                <td class="">EPay</td>
                                <td class="">https://www.kncloud.app/api/v1/guest/payment/notify/EPay/4REUoMgc</td>
                                <td class="ant-table-fixed-columns-in-body" style="text-align: right;"><a
                                    href="javascript:void(0);">编辑</a>
                                  <div class="ant-divider ant-divider-vertical" role="separator"></div>
                                  <a href="javascript:void(0)">删除</a></td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div class="ant-table-fixed-right">
                          <div class="ant-table-body-outer">
                            <div class="ant-table-body-inner">
                              <table class="ant-table-fixed">
                                <colgroup>
                                  <col>
                                </colgroup>
                                <thead class="ant-table-thead">
                                <tr style="height: 54px;">
                                  <th class="ant-table-align-right ant-table-row-cell-last" style="text-align: right;">
                                    <span class="ant-table-header-column"><div><span
                                        class="ant-table-column-title">操作</span><span
                                        class="ant-table-column-sorter"></span></div></span></th>
                                </tr>
                                </thead>
                                <tbody class="ant-table-tbody">
                                <tr class="ant-table-row ant-table-row-level-0" data-row-key="0" style="height: 54px;">
                                  <td class="" style="text-align: right;"><a href="javascript:void(0);">编辑</a>
                                    <div class="ant-divider ant-divider-vertical" role="separator"></div>
                                    <a href="javascript:void(0)">删除</a></td>
                                </tr>
                                <tr class="ant-table-row ant-table-row-level-0" data-row-key="1" style="height: 54px;">
                                  <td class="" style="text-align: right;"><a href="javascript:void(0);">编辑</a>
                                    <div class="ant-divider ant-divider-vertical" role="separator"></div>
                                    <a href="javascript:void(0)">删除</a></td>
                                </tr>
                                <tr class="ant-table-row ant-table-row-level-0" data-row-key="2" style="height: 54px;">
                                  <td class="" style="text-align: right;"><a href="javascript:void(0);">编辑</a>
                                    <div class="ant-divider ant-divider-vertical" role="separator"></div>
                                    <a href="javascript:void(0)">删除</a></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManagePay"
}
</script>

<style scoped>

</style>