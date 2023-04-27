<template>
  <div class="p-0 p-lg-4">
    <div class="mb-0 block border-bottom js-classic-nav d-none d-sm-block">
      <div class="block-content block-content-full">
        <div class="row no-gutters border">
          <div class="col-sm-6 col-xl-3 js-appear-enabled animated" data-toggle="appear"><a
              class="block block-bordered block-link-pop text-center mb-0">
            <div class="block-content block-content-full text-center"><i
                class="fa-2x si si-equalizer text-primary d-none d-sm-inline-block mb-3"></i>
              <div class="font-w600 text-uppercase">系统设置</div>
            </div>
          </a></div>
          <div class="col-sm-6 col-xl-3 js-appear-enabled animated" data-toggle="appear"><a
              class="block block-bordered block-link-pop text-center mb-0">
            <div class="block-content block-content-full text-center"><i
                class="fa-2x si si-list text-primary d-none d-sm-inline-block mb-3"></i>
              <div class="font-w600 text-uppercase">订单管理</div>
            </div>
          </a></div>
          <div class="col-sm-6 col-xl-3 js-appear-enabled animated" data-toggle="appear"><a
              class="block block-bordered block-link-pop text-center mb-0">
            <div class="block-content block-content-full text-center"><i
                class="fa-2x si si-bag text-primary d-none d-sm-inline-block mb-3"></i>
              <div class="font-w600 text-uppercase">订阅管理</div>
            </div>
          </a></div>
          <div class="col-sm-6 col-xl-3 js-appear-enabled animated" data-toggle="appear"><a
              class="block block-bordered block-link-pop text-center mb-0">
            <div class="block-content block-content-full text-center"><i
                class="fa-2x si si-users text-primary d-none d-sm-inline-block mb-3"></i>
              <div class="font-w600 text-uppercase">用户管理</div>
            </div>
          </a></div>
        </div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-lg-12 js-appear-enabled animated" data-toggle="appear">
        <div class="block border-bottom mb-0">
          <div class="block-content">
            <div class="px-sm-3 clearfix"><i class="fa fa-chart-line fa-2x text-gray-light float-right"></i>
              <p class="text-muted w-75 mb-1">今日收入</p>
              <p class="display-4 text-black font-w300 mb-2">0.00<span
                  class="font-size-h5 font-w600 text-muted">CNY</span></p></div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 js-appear-enabled animated" data-toggle="appear">
        <div class="block border-bottom mb-0 v2board-stats-bar">
          <div class="block-content block-content-full">
            <div class="d-flex align-items-center">
              <div class="pr-4 pr-sm-5 pl-0 pl-sm-3"><p class="fs-3 text-dark mb-0">0.00 CNY</p>
                <p class="text-muted mb-0">本月收入</p></div>
              <div class="px-4 px-sm-5 border-start"><p class="fs-3 text-dark mb-0">0.00 CNY</p>
                <p class="text-muted mb-0">上月收入</p></div>
              <div class="px-4 px-sm-5 border-start"><p class="fs-3 text-dark mb-0">0.00 CNY</p>
                <p class="text-muted mb-0">上月佣金支出</p></div>
              <div class="px-4 px-sm-5 border-start"><p class="fs-3 text-dark mb-0">-</p>
                <p class="text-muted mb-0">本月新增用户</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 js-appear-enabled animated" data-toggle="appear">
        <div class="block border-bottom mb-0">
          <div class="px-sm-3 pt-sm-3 py-3 clearfix" id="orderChart" _echarts_instance_="ec_1669882604193"
               style="height: 400px; position: relative;">
            <div style="position: relative; overflow: hidden; width: 980px; height: 368px; cursor: default;">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                   baseProfile="full" width="980" height="368" style="position:absolute;left:0;top:0;user-select:none">
                <rect width="980" height="368" x="0" y="0" id="0" fill="none" fill-opacity="1"></rect>
                <g>
                  <path d="M38.9113 337.5L970.2 337.5" fill="none" stroke="#E0E6F1"></path>
                  <path d="M38.9113 281.5L970.2 281.5" fill="none" stroke="#E0E6F1"></path>
                  <path d="M38.9113 226.5L970.2 226.5" fill="none" stroke="#E0E6F1"></path>
                  <path d="M38.9113 171.5L970.2 171.5" fill="none" stroke="#E0E6F1"></path>
                  <path d="M38.9113 115.5L970.2 115.5" fill="none" stroke="#E0E6F1"></path>
                  <path d="M38.9113 60.5L970.2 60.5" fill="none" stroke="#E0E6F1"></path>
                  <path d="M38.9113 337.5L970.2 337.5" fill="none" stroke="#6E7079" stroke-linecap="round"></path>
                  <path d="M39.5 336.96L39.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M101.5 336.96L101.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M163.5 336.96L163.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M225.5 336.96L225.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M287.5 336.96L287.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M349.5 336.96L349.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M411.5 336.96L411.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M473.5 336.96L473.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M535.5 336.96L535.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M597.5 336.96L597.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M660.5 336.96L660.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M722.5 336.96L722.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M784.5 336.96L784.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M846.5 336.96L846.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M908.5 336.96L908.5 341.96" fill="none" stroke="#6E7079"></path>
                  <path d="M970.5 336.96L970.5 341.96" fill="none" stroke="#6E7079"></path>
                  <text dominant-baseline="central" text-anchor="end"
                        style="font-size:12px;font-family:Microsoft YaHei;" transform="translate(30.9113 336.96)"
                        fill="#6E7079">0
                  </text>
                  <text dominant-baseline="central" text-anchor="end"
                        style="font-size:12px;font-family:Microsoft YaHei;" transform="translate(30.9113 281.568)"
                        fill="#6E7079">20
                  </text>
                  <text dominant-baseline="central" text-anchor="end"
                        style="font-size:12px;font-family:Microsoft YaHei;" transform="translate(30.9113 226.176)"
                        fill="#6E7079">40
                  </text>
                  <text dominant-baseline="central" text-anchor="end"
                        style="font-size:12px;font-family:Microsoft YaHei;" transform="translate(30.9113 170.784)"
                        fill="#6E7079">60
                  </text>
                  <text dominant-baseline="central" text-anchor="end"
                        style="font-size:12px;font-family:Microsoft YaHei;" transform="translate(30.9113 115.392)"
                        fill="#6E7079">80
                  </text>
                  <text dominant-baseline="central" text-anchor="end"
                        style="font-size:12px;font-family:Microsoft YaHei;" transform="translate(30.9113 60)"
                        fill="#6E7079">100
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(38.9113 344.96)"
                        fill="#6E7079">10-31
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(100.9972 344.96)"
                        fill="#6E7079">11-02
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(163.0832 344.96)"
                        fill="#6E7079">11-04
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(225.1691 344.96)"
                        fill="#6E7079">11-06
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(287.255 344.96)"
                        fill="#6E7079">11-08
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(349.3409 344.96)"
                        fill="#6E7079">11-10
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(411.4268 344.96)"
                        fill="#6E7079">11-12
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(473.5127 344.96)"
                        fill="#6E7079">11-14
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(535.5986 344.96)"
                        fill="#6E7079">11-16
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(597.6845 344.96)"
                        fill="#6E7079">11-18
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(659.7704 344.96)"
                        fill="#6E7079">11-20
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(721.8564 344.96)"
                        fill="#6E7079">11-22
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(783.9423 344.96)"
                        fill="#6E7079">11-24
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(846.0282 344.96)"
                        fill="#6E7079">11-26
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(908.1141 344.96)"
                        fill="#6E7079">11-28
                  </text>
                  <text dominant-baseline="central" text-anchor="middle"
                        style="font-size:12px;font-family:Microsoft YaHei;" y="6" transform="translate(970.2 344.96)"
                        fill="#6E7079">11-30
                  </text>
                  <g clip-path="url(#zr0-c0)">
                    <path
                        d="M38.9113 334.1904C38.9113 334.1904 54.4328 334.1904 69.9543 334.1904C85.4758 334.1904 85.4758 334.1904 100.9972 334.1904C116.5187 334.1904 116.5495 334.1904 132.0402 334.1904C147.5924 334.1904 147.6525 333.4858 163.0831 331.4208C178.6955 329.3314 178.7515 325.8816 194.1261 325.8816C209.7944 325.8816 209.3791 334.1904 225.1691 334.1904C240.4221 334.1904 240.7213 334.1904 256.212 334.1904C271.7643 334.1904 271.7335 336.96 287.255 336.96C302.7765 336.96 302.7457 334.1904 318.2979 334.1904C333.7886 334.1904 333.8502 334.1904 349.3409 334.1904C364.8931 334.1904 364.8316 331.4208 380.3839 331.4208C395.8746 331.4208 396.0269 331.4208 411.4268 331.4208C427.0699 331.4208 426.8267 336.96 442.4698 336.96C457.8696 336.96 458.022 336.96 473.5127 336.96C489.0649 336.96 489.0342 334.1904 504.5557 334.1904C520.0771 334.1904 520.0464 336.96 535.5986 336.96C551.0894 336.96 551.1201 336.96 566.6416 336.96C582.1631 336.96 582.1631 336.96 597.6845 336.96C613.206 336.96 613.206 336.96 628.7275 336.96C644.249 336.96 644.2797 336.96 659.7704 336.96C675.3227 336.96 675.2919 334.1904 690.8134 334.1904C706.3349 334.1904 706.4258 336.96 721.8564 336.96C737.4687 336.96 737.3778 331.4208 752.8993 331.4208C768.4208 331.4208 768.2992 336.96 783.9423 336.96C799.3421 336.96 799.5854 336.96 814.9852 336.96C830.6283 336.96 830.4159 333.5102 846.0282 331.4208C861.4588 329.3558 861.6405 328.6512 877.0711 328.6512C892.6834 328.6512 892.5017 332.101 908.1141 334.1904C923.5447 336.2554 923.8733 336.96 939.157 336.96C954.9162 336.96 970.2 328.6512 970.2 328.6512"
                        fill="none" stroke="rgb(84,112,198)" stroke-width="2" stroke-linejoin="bevel"></path>
                  </g>
                  <g clip-path="url(#zr0-c1)">
                    <path
                        d="M38.9113 336.96C38.9113 336.96 55.4092 336.96 69.9543 336.96C86.4522 336.96 85.4758 320.3424 100.9972 320.3424C116.5187 320.3424 115.5423 336.96 132.0402 336.96C146.5852 336.96 147.5617 336.96 163.0831 336.96C178.6046 336.96 178.6046 336.96 194.1261 336.96C209.6476 336.96 210.624 336.96 225.1691 336.96C241.667 336.96 240.6905 320.3424 256.212 320.3424C271.7335 320.3424 270.757 336.96 287.255 336.96C301.8 336.96 302.7765 336.96 318.2979 336.96C333.8194 336.96 333.8194 336.96 349.3409 336.96C364.8624 336.96 365.8388 336.96 380.3839 336.96C396.8818 336.96 395.9053 320.3424 411.4268 320.3424C426.9483 320.3424 425.9718 336.96 442.4698 336.96C457.0148 336.96 457.9912 336.96 473.5127 336.96C489.0342 336.96 489.0342 336.96 504.5557 336.96C520.0771 336.96 520.0771 336.96 535.5986 336.96C551.1201 336.96 551.1201 336.96 566.6416 336.96C582.1631 336.96 582.1631 336.96 597.6845 336.96C613.206 336.96 613.206 336.96 628.7275 336.96C644.249 336.96 644.249 336.96 659.7704 336.96C675.2919 336.96 675.2919 336.96 690.8134 336.96C706.3349 336.96 706.3349 336.96 721.8564 336.96C737.3778 336.96 737.3778 336.96 752.8993 336.96C768.4208 336.96 768.4208 336.96 783.9423 336.96C799.4637 336.96 799.4637 336.96 814.9852 336.96C830.5067 336.96 831.4832 336.96 846.0282 336.96C862.5261 336.96 861.5496 320.3424 877.0711 320.3424C892.5926 320.3424 891.6161 336.96 908.1141 336.96C922.6591 336.96 924.612 336.96 939.157 336.96C955.655 336.96 970.2 320.3424 970.2 320.3424"
                        fill="none" stroke="rgb(145,204,117)" stroke-width="2" stroke-linejoin="bevel"></path>
                  </g>
                  <g clip-path="url(#zr0-c2)">
                    <path
                        d="M38.9113 336.96C38.9113 336.96 54.4636 336.96 69.9543 336.96C85.5065 336.96 85.445 334.1904 100.9972 334.1904C116.488 334.1904 116.5187 334.1904 132.0402 334.1904C147.5617 334.1904 147.5924 334.1904 163.0831 334.1904C178.6354 334.1904 178.6955 331.4208 194.1261 331.4208C209.7384 331.4208 209.5567 336.96 225.1691 336.96C240.5997 336.96 240.6905 334.1904 256.212 334.1904C271.7335 334.1904 271.7027 336.96 287.255 336.96C302.7457 336.96 302.7765 336.96 318.2979 336.96C333.8194 336.96 333.941 336.96 349.3409 336.96C364.984 336.96 364.7407 331.4208 380.3839 331.4208C395.7837 331.4208 396.0269 331.4208 411.4268 331.4208C427.0699 331.4208 426.8267 336.96 442.4698 336.96C457.8696 336.96 458.022 336.96 473.5127 336.96C489.0649 336.96 489.0342 334.1904 504.5557 334.1904C520.0771 334.1904 520.0464 336.96 535.5986 336.96C551.0894 336.96 551.1201 336.96 566.6416 336.96C582.1631 336.96 582.1631 336.96 597.6845 336.96C613.206 336.96 613.206 336.96 628.7275 336.96C644.249 336.96 644.2797 336.96 659.7704 336.96C675.3227 336.96 675.2919 334.1904 690.8134 334.1904C706.3349 334.1904 706.4258 336.96 721.8564 336.96C737.4687 336.96 737.3778 331.4208 752.8993 331.4208C768.4208 331.4208 768.2992 336.96 783.9423 336.96C799.3421 336.96 799.4945 336.96 814.9852 336.96C830.5375 336.96 830.5067 335.5752 846.0282 334.1904C861.5497 332.8056 861.5497 331.4208 877.0711 331.4208C892.5926 331.4208 892.5926 332.8056 908.1141 334.1904C923.6356 335.5752 923.7264 336.96 939.157 336.96C954.7694 336.96 970.2 331.4208 970.2 331.4208"
                        fill="none" stroke="rgb(250,200,88)" stroke-width="2" stroke-linejoin="bevel"></path>
                  </g>
                  <g clip-path="url(#zr0-c3)">
                    <path
                        d="M38.9113 336.96C38.9113 336.96 61.9063 336.96 69.9543 336.96C92.9493 336.96 78.0022 253.872 100.9972 253.872C109.0452 253.872 121.847 253.872 132.0402 253.872C152.89 253.872 156.0527 309.264 163.0831 309.264C187.0957 309.264 179.5282 94.62 194.1261 94.62C210.5712 94.62 202.3943 336.96 225.1691 336.96C233.4372 336.96 240.6905 253.872 256.212 253.872C271.7335 253.872 264.2599 336.96 287.255 336.96C295.3029 336.96 302.7765 336.96 318.2979 336.96C333.8194 336.96 344.5248 336.96 349.3409 336.96C375.5678 336.96 357.8172 170.784 380.3839 170.784C388.8602 170.784 400.3869 196.6273 411.4268 226.176C431.4299 279.7153 418.023 336.96 442.4698 336.96C449.0659 336.96 465.4648 336.96 473.5127 336.96C496.5077 336.96 489.0342 253.872 504.5557 253.872C520.0771 253.872 512.6036 336.96 535.5986 336.96C543.6466 336.96 551.1201 336.96 566.6416 336.96C582.1631 336.96 582.1631 336.96 597.6845 336.96C613.206 336.96 613.206 336.96 628.7275 336.96C644.249 336.96 651.7225 336.96 659.7704 336.96C682.7655 336.96 675.2919 253.872 690.8134 253.872C706.3349 253.872 711.1737 336.96 721.8564 336.96C742.2167 336.96 737.3778 170.784 752.8993 170.784C768.4208 170.784 757.7154 336.96 783.9423 336.96C788.7583 336.96 806.9373 336.96 814.9852 336.96C837.9803 336.96 829.2979 294.9198 846.0282 253.872C860.3409 218.7558 861.5496 184.632 877.0711 184.632C892.5926 184.632 893.8014 218.7558 908.1141 253.872C924.8444 294.9198 928.4744 336.96 939.157 336.96C959.5173 336.96 970.2 170.784 970.2 170.784"
                        fill="none" stroke="rgb(238,102,102)" stroke-width="2" stroke-linejoin="bevel"></path>
                  </g>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,38.9113,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,69.9543,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,100.9972,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,132.0402,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,163.0831,331.4208)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,194.1261,325.8816)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,225.1691,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,256.212,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,287.255,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,318.2979,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,349.3409,334.1904)"
                        fill="rgb(255,255,255)" stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,380.3839,331.4208)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,411.4268,331.4208)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,442.4698,336.96)" fill="rgb(255,255,255)"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,473.5127,336.96)" fill="rgb(255,255,255)"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,504.5557,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,535.5986,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,566.6416,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,597.6845,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,628.7275,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,659.7704,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,690.8134,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,721.8564,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,752.8993,331.4208)"
                        fill="rgb(255,255,255)" stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,783.9423,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,814.9852,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,846.0282,331.4208)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,877.0711,328.6512)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,908.1141,334.1904)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,939.157,336.96)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,970.2,328.6512)" fill="#fff"
                        stroke="#5470c6"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,38.9113,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,69.9543,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,100.9972,320.3424)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,132.0402,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,163.0831,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,194.1261,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,225.1691,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,256.212,320.3424)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,287.255,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,318.2979,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,349.3409,336.96)" fill="rgb(255,255,255)"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,380.3839,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,411.4268,320.3424)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,442.4698,336.96)" fill="rgb(255,255,255)"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,473.5127,336.96)" fill="rgb(255,255,255)"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,504.5557,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,535.5986,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,566.6416,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,597.6845,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,628.7275,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,659.7704,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,690.8134,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,721.8564,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,752.8993,336.96)" fill="rgb(255,255,255)"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,783.9423,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,814.9852,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,846.0282,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,877.0711,320.3424)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,908.1141,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,939.157,336.96)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,970.2,320.3424)" fill="#fff"
                        stroke="#91cc75"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,38.9113,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,69.9543,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,100.9972,334.1904)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,132.0402,334.1904)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,163.0831,334.1904)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,194.1261,331.4208)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,225.1691,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,256.212,334.1904)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,287.255,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,318.2979,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,349.3409,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,380.3839,331.4208)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,411.4268,331.4208)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,442.4698,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,473.5127,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,504.5557,334.1904)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,535.5986,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,566.6416,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,597.6845,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,628.7275,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,659.7704,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,690.8134,334.1904)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,721.8564,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,752.8993,331.4208)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,783.9423,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,814.9852,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,846.0282,334.1904)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,877.0711,331.4208)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,908.1141,334.1904)"
                        fill="rgb(255,255,255)" stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,939.157,336.96)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,970.2,331.4208)" fill="rgb(255,255,255)"
                        stroke="#fac858"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,38.9113,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,69.9543,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,100.9972,253.872)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,132.0402,253.872)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,163.0831,309.264)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,194.1261,94.62)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,225.1691,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,256.212,253.872)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,287.255,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,318.2979,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,349.3409,336.96)" fill="rgb(255,255,255)"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,380.3839,170.784)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,411.4268,226.176)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,442.4698,336.96)" fill="rgb(255,255,255)"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,473.5127,336.96)" fill="rgb(255,255,255)"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,504.5557,253.872)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,535.5986,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,566.6416,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,597.6845,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,628.7275,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,659.7704,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,690.8134,253.872)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,721.8564,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,752.8993,170.784)"
                        fill="rgb(255,255,255)" stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,783.9423,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,814.9852,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,846.0282,253.872)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,877.0711,184.632)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,908.1141,253.872)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,939.157,336.96)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M1 0A1 1 0 1 1 1 -0.0001" transform="matrix(2,0,0,2,970.2,170.784)" fill="#fff"
                        stroke="#ee6666"></path>
                  <path d="M-5 -5l444.0313 0l0 23.2l-444.0312 0Z" transform="translate(5 5)" fill="rgb(0,0,0)"
                        fill-opacity="0" stroke="#ccc" stroke-width="0"></path>
                  <path d="M0 7L25 7" transform="translate(6 4.6)" fill="#000" stroke="#5470c6" stroke-width="2"
                        stroke-linecap="butt" stroke-miterlimit="10"></path>
                  <path d="M18.1 7A5.6 5.6 0 1 1 18.1 6.9994" transform="translate(6 4.6)" fill="#fff" stroke="#5470c6"
                        stroke-width="2" stroke-linecap="butt" stroke-miterlimit="10"></path>
                  <text dominant-baseline="central" text-anchor="start"
                        style="font-size:12px;font-family:Microsoft YaHei;" x="30" y="7" transform="translate(6 4.6)"
                        fill="#333">佣金笔数(已发放)
                  </text>
                  <path d="M0 7L25 7" transform="translate(139.0156 4.6)" fill="#000" stroke="#91cc75" stroke-width="2"
                        stroke-linecap="butt" stroke-miterlimit="10"></path>
                  <path d="M18.1 7A5.6 5.6 0 1 1 18.1 6.9994" transform="translate(139.0156 4.6)" fill="#fff"
                        stroke="#91cc75" stroke-width="2" stroke-linecap="butt" stroke-miterlimit="10"></path>
                  <text dominant-baseline="central" text-anchor="start"
                        style="font-size:12px;font-family:Microsoft YaHei;" x="30" y="7"
                        transform="translate(139.0156 4.6)" fill="#333">佣金金额(已发放)
                  </text>
                  <path d="M0 7L25 7" transform="translate(272.0313 4.6)" fill="#000" stroke="#fac858" stroke-width="2"
                        stroke-linecap="butt" stroke-miterlimit="10"></path>
                  <path d="M18.1 7A5.6 5.6 0 1 1 18.1 6.9994" transform="translate(272.0313 4.6)" fill="#fff"
                        stroke="#fac858" stroke-width="2" stroke-linecap="butt" stroke-miterlimit="10"></path>
                  <text dominant-baseline="central" text-anchor="start"
                        style="font-size:12px;font-family:Microsoft YaHei;" x="30" y="7"
                        transform="translate(272.0313 4.6)" fill="#333">收款笔数
                  </text>
                  <path d="M0 7L25 7" transform="translate(361.0313 4.6)" fill="#000" stroke="#ee6666" stroke-width="2"
                        stroke-linecap="butt" stroke-miterlimit="10"></path>
                  <path d="M18.1 7A5.6 5.6 0 1 1 18.1 6.9994" transform="translate(361.0313 4.6)" fill="#fff"
                        stroke="#ee6666" stroke-width="2" stroke-linecap="butt" stroke-miterlimit="10"></path>
                  <text dominant-baseline="central" text-anchor="start"
                        style="font-size:12px;font-family:Microsoft YaHei;" x="30" y="7"
                        transform="translate(361.0313 4.6)" fill="#333">收款金额
                  </text>
                </g>
                <defs>
                  <clipPath id="zr0-c0">
                    <path d="M37 59l933 0l0 278.96l-933 0Z" fill="#000"></path>
                  </clipPath>
                  <clipPath id="zr0-c1">
                    <path d="M37 59l933 0l0 278.96l-933 0Z" fill="#000"></path>
                  </clipPath>
                  <clipPath id="zr0-c2">
                    <path d="M37 59l933 0l0 278.96l-933 0Z" fill="#000"></path>
                  </clipPath>
                  <clipPath id="zr0-c3">
                    <path d="M37 59l933 0l0 278.96l-933 0Z" fill="#000"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class=""
                 style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 10px; transition: opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgb(255, 255, 255); border-width: 1px; border-radius: 4px; color: rgb(102, 102, 102); font: 14px / 21px &quot;Microsoft YaHei&quot;; padding: 10px; top: 0px; left: 0px; transform: translate3d(738px, 102px, 0px); border-color: rgb(255, 255, 255); pointer-events: none; visibility: hidden; opacity: 0;">
              <div style="margin: 0px 0 0;line-height:1;">
                <div style="margin: 0px 0 0;line-height:1;">
                  <div style="font-size:14px;color:#666;font-weight:400;line-height:1;">11-28</div>
                  <div style="margin: 10px 0 0;line-height:1;">
                    <div style="margin: 0px 0 0;line-height:1;">
                      <div style="margin: 0px 0 0;line-height:1;"><span
                          style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;"></span><span
                          style="font-size:14px;color:#666;font-weight:400;margin-left:2px">佣金笔数(已发放)</span><span
                          style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">1</span>
                        <div style="clear:both"></div>
                      </div>
                      <div style="clear:both"></div>
                    </div>
                    <div style="margin: 10px 0 0;line-height:1;">
                      <div style="margin: 0px 0 0;line-height:1;"><span
                          style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#91cc75;"></span><span
                          style="font-size:14px;color:#666;font-weight:400;margin-left:2px">佣金金额(已发放)</span><span
                          style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">0</span>
                        <div style="clear:both"></div>
                      </div>
                      <div style="clear:both"></div>
                    </div>
                    <div style="margin: 10px 0 0;line-height:1;">
                      <div style="margin: 0px 0 0;line-height:1;"><span
                          style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#fac858;"></span><span
                          style="font-size:14px;color:#666;font-weight:400;margin-left:2px">收款笔数</span><span
                          style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">1</span>
                        <div style="clear:both"></div>
                      </div>
                      <div style="clear:both"></div>
                    </div>
                    <div style="margin: 10px 0 0;line-height:1;">
                      <div style="margin: 0px 0 0;line-height:1;"><span
                          style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#ee6666;"></span><span
                          style="font-size:14px;color:#666;font-weight:400;margin-left:2px">收款金额</span><span
                          style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">30</span>
                        <div style="clear:both"></div>
                      </div>
                      <div style="clear:both"></div>
                    </div>
                    <div style="clear:both"></div>
                  </div>
                  <div style="clear:both"></div>
                </div>
                <div style="clear:both"></div>
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
  name: "DashBoard"
}
</script>

<style scoped>

</style>