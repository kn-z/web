<template>
    <body>
    <div id="root" :class="isTop ? '' : 'ant-scrolling-effect'"
         :style="isTop ? '' : 'position: relative; width: calc(100%); overflow: hidden; touch-action: none;'">
        <div id="page-container" :class="sideBarInfo.sideType">
            <div class="v2board-nav-mask" :style="sideBarInfo.maskShow" @click="closeSide"></div>
            <SideBar :sideDict="sideDict"/>
            <PageHeader :sideDict="sideDict" :email=pageHeaderInfo.email :isLogin="pageHeaderInfo.isLogin"
                        :loginType="loginType"/>
            <MainContainer :sideDict="sideDict" :loginType="loginType" :pageDict="pageDict"/>
        </div>
        <TipBox :tipTitle="tipBox.tipTitle" :tipMsg="tipBox.tipMsg" :type="tipBox.type" v-show="tipBox.isShow"
                @closeAlert="closeAlert"/>
    </div>
    <RightBar :pageDict="pageDict"/>
    <SelectDropDownMenu/>
    <Document/>
    <LeftBottomButton v-show="!isBackend"/>
    </body>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar";
import PageHeader from "@/components/pageheader/PageHeader";
import MainContainer from "@/components/mainpage/MainContainer";
import TipBox from "@/components/tools/TipBox";
import RightBar from "@/components/tools/RightBar";
import Document from "@/components/tools/DocumentBoard";
import SelectDropDownMenu from "@/components/tools/SelectDropDownMenu";
import LeftBottomButton from "@/components/tools/LeftBottomButton.vue"

export default {
    name: "UserView",
    components: {
        PageHeader,
        SideBar,
        MainContainer,
        TipBox,
        RightBar,
        Document,
        SelectDropDownMenu,
        LeftBottomButton
    },
    data() {
        return {
            pageHeaderInfo: {
                email: null,
                isLogin: false,
            },
            sideBarInfo: {
                maskShow: "display: none;",
                sideType: "sidebar-o sidebar-dark page-header-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled false"
            },
            tipBox: {
                tipTitle: null,
                tipMsg: null,
                type: null,
                isShow: false,
            },
            loginType: 0,
            isTop: true,
            adminPath: 'backend',
            pageDict: {
                '01': {methodName: 'reloadUserList', reloadRBName: 'reloadSU', getRBTName: 'getSUType'},
                '01E': {name: "编辑用户",},
                '01A': {name: "添加用户"},
                '01F': {name: "过滤器"},

                '02': {methodName: 'reloadGoodsList', reloadRBName: 'reloadSG', getRBTName: 'getSGType',},
                '02E': {name: "编辑商品"},
                '02A': {name: "添加商品"},

                '03': {methodName: 'reloadCamiList', reloadRBName: 'reloadEC', getRBTName: 'getSCType'},
                '03E': {name: "编辑卡密"},
                '03A': {name: "添加卡密"},

                '04': {methodName: 'reloadOrderList', reloadRBName: 'reloadSO', getRBTName: 'getSOType',},
                '04E': {name: "编辑订单",},
                '04A': {name: "添加订单"},

                '05': {methodName: 'reloadCateList', reloadRBName: 'reloadSCT', getRBTName: 'getSCTType',},
                '05E': {name: "编辑类别",},
                '05A': {name: "添加类别",},

                '06': {methodName: 'reloadPaymentList', reloadRBName: 'reloadSPM', getRBTName: 'getSPMType', switchItemFocus:'switchPMIFocus', switchSetFocus:'switchPMSFocus'},
                '06E': {name: "编辑支付方式",},
                '06A': {name: "添加支付方式",},

                '07': {methodName: 'reloadNoticeList', reloadRBName: 'reloadSN', getRBTName: 'getSNType',},
                '07E': {name: "编辑公告",},
                '07A': {name: "添加公告",},
            }
        }
    },
    watch: {
        $route() {
            this.tokenHandle()
        },
    },
    computed: {
        isBackend(){
            return (this.$route.fullPath.indexOf('/backend/') !== -1)
        },
        sideDict() {
            if (this.isBackend) {
                return [
                    {
                        id: "11",
                        name: "仪表盘",
                        inSide: 1,
                        icon: "nav-main-link-icon si si-speedometer",
                        path: '/backend/dashboard'
                    },
                    {
                        id: "12",
                        name: "用户管理",
                        inSide: 1,
                        icon: "nav-main-link-icon si si-users",
                        path: '/backend/user'
                    },
                    {
                        id: "13",
                        name: "商品管理",
                        inSide: 1,
                        icon: "nav-main-link-icon si si-bag",
                        path: '/backend/goods'
                    },
                    {
                        id: "14",
                        name: "卡密管理",
                        inSide: 1,
                        icon: "nav-main-link-icon si si-layers",
                        path: '/backend/cami'
                    },
                    {
                        id: "15",
                        name: "订单管理",
                        inSide: 1,
                        icon: "nav-main-link-icon si si-list",
                        path: '/backend/order/all'
                    },
                    {
                        id: "17",
                        name: "类别管理",
                        inSide: 1,
                        icon: "nav-main-link-icon si si-wrench",
                        path: '/backend/category'
                    },
                    {
                        id: "16",
                        name: "支付管理",
                        inSide: 1,
                        icon: "nav-main-link-icon si si-credit-card",
                        path: '/backend/buy'
                    },
                    {
                        id: "18",
                        name: "公告管理",
                        inSide: 1,
                        icon: "nav-main-link-icon si si-speech",
                        path: '/backend/notice'
                    },
                ]
            } else {
                return [
                    {id: "03", name: "购买商品", inSide: 0, icon: "nav-main-link-icon si si-bag", path: '/goods/'},
                    {id: "01", name: "购买商品", inSide: 1, icon: "nav-main-link-icon si si-bag", path: '/goods'},
                    {id: "02", name: "订单详情", inSide: 0, icon: "nav-main-link-icon si si-bag", path: '/order/info/'},
                    {id: "04", name: "订单查询", inSide: 1, icon: "nav-main-link-icon si si-list", path: '/order/list'},
                ]
            }
            // if (this.isBackend) {
            //     return [
            //         {
            //             id: "11",
            //             name: "仪表盘",
            //             inSide: 1,
            //             icon: "nav-main-link-icon si si-speedometer",
            //             path: '/backend/dashboard'
            //         },
            //         {
            //             id: "12",
            //             name: "用户管理",
            //             inSide: 1,
            //             icon: "nav-main-link-icon si si-users",
            //             path: '/backend/user'
            //         },
            //         {
            //             id: "13",
            //             name: "商品管理",
            //             inSide: 1,
            //             icon: "nav-main-link-icon si si-bag",
            //             path: '/backend/goods'
            //         },
            //         {
            //             id: "14",
            //             name: "卡密管理",
            //             inSide: 1,
            //             icon: "nav-main-link-icon si si-layers",
            //             path: '/backend/cami'
            //         },
            //         {
            //             id: "15",
            //             name: "订单管理",
            //             inSide: 1,
            //             icon: "nav-main-link-icon si si-list",
            //             path: '/backend/order/all'
            //         },
            //         {
            //             id: "17",
            //             name: "类别管理",
            //             inSide: 1,
            //             icon: "nav-main-link-icon si si-wrench",
            //             path: '/backend/category'
            //         },
            //         {
            //             id: "16",
            //             name: "支付管理",
            //             inSide: 1,
            //             icon: "nav-main-link-icon si si-credit-card",
            //             path: '/backend/buy'
            //         },
            //         {
            //             id: "18",
            //             name: "公告管理",
            //             inSide: 1,
            //             icon: "nav-main-link-icon si si-speech",
            //             path: '/backend/notice'
            //         },
            //     ]
            // } else {
            //     return [
            //         {id: "01", name: "购买商品", inSide: 1, icon: "nav-main-link-icon si si-bag", path: '/goods'},
            //         {id: "02", name: "订单详情", inSide: 0, icon: "nav-main-link-icon si si-bag", path: '/order/info/'},
            //         {id: "03", name: "购买商品", inSide: 0, icon: "nav-main-link-icon si si-bag", path: '/good/'},
            //         {id: "04", name: "订单查询", inSide: 1, icon: "nav-main-link-icon si si-list", path: '/order/list'},
            //     ]
            // }
        }
    },
    methods: {
        showTipMsg(tip) {
            clearInterval(this.tipTimer)
            this.tipBox.tipMsg = tip.tipMsg
            this.tipBox.tipTitle = tip.tipTitle
            this.tipBox.type = tip.type
            this.tipBox.isShow = true
            this.tipTimer = setInterval(() => {
                this.tipBox.isShow = false
                clearInterval(this.tipTimer)
            }, 3000)
        },

        closeAlert() {
            this.tipBox.isShow = false
        },

        async tokenHandle() {
            if (!localStorage.getItem('token') && this.$route.fullPath.indexOf('/backend/') !== -1) {
                await this.$router.push('/admin')
                this.pageHeaderInfo.isLogin = false
                this.pageHeaderInfo.email = "未登录"
                return
            }
            if (!localStorage.getItem('token')) {
                this.pageHeaderInfo.email = "未登录"
                this.pageHeaderInfo.isLogin = false
                return
            }
            // if (this.$route.fullPath.indexOf('/backend/') !== -1 || this.$route.fullPath.indexOf('/goods/')) {
            if (this.$route.fullPath.indexOf('/backend/') !== -1) {
                await this.checkAdminToken()
            } else {
                await this.checkToken()
            }
        },

        async checkToken() {
            const {data: res} = await this.$http.post('user/info')
            if (res.status === 200) {
                this.pageHeaderInfo.isLogin = true
                this.pageHeaderInfo.email = res.data.email
                this.loginType = 0
            } else {
                this.pageHeaderInfo.isLogin = false
                this.pageHeaderInfo.email = "未登录"
            }
        },

        async checkAdminToken() {
            const {data: res} = await this.$http.post('user/info')
            if (res.status === 200) {
                if (res.data.role === 1) {
                    this.pageHeaderInfo.isLogin = true
                    this.pageHeaderInfo.email = res.data.email
                    return
                }
            }
            await this.$router.push('/admin')
            this.pageHeaderInfo.isLogin = false
            this.pageHeaderInfo.email = "未登录"
        },

        openSide() {
            this.sideBarInfo.maskShow = "display: block;"
            this.sideBarInfo.sideType = "sidebar-o sidebar-dark page-header-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled sidebar-o-xs"
        },
        closeSide() {
            this.sideBarInfo.maskShow = "display: none;"
            this.sideBarInfo.sideType = "sidebar-o sidebar-dark page-header-dark side-scroll page-header-fixed main-content-boxed side-trans-enabled false"
        },


        resizeHandle() {
            let width = document.documentElement.clientWidth;
            this.$bus.$emit('rightBarGetSize', width)
        }
    },

    mounted() {
        this.resizeHandle();
        window.addEventListener("resize", this.resizeHandle);

        this.tokenHandle()
        this.$bus.$on('switchSide', (data) => {
            if (data === 1) this.openSide()
            if (data === 0) this.closeSide()
        })
        this.$bus.$on('showTipMsg', (data) => {
            this.showTipMsg(data)
        })
        this.$bus.$on('loginType', (data) => {
            this.loginType = data
        })
        this.$bus.$on('switchTop', (data) => {
            this.isTop = data
        })
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.resizeHandle);
    }
}
</script>

<style scoped>

</style>
