<template>
    <div>
        <div class="row" id="cashier">
            <div class="col-md-8 col-sm-12">
                <div class="block block-rounded">
                    <div class="block-header block-header-default"><h3 class="block-title v2board-trade-no">
                        商品信息</h3></div>
                    <div class="block-content pb-4">
                        <div class="v2board-order-info">
                            <div><span>产品名称：</span><span>{{ data.title }}</span></div>
                            <div><span>产品单价：</span><span>¥ {{ data.price }}</span></div>
                            <div><span>数量购买：</span><span>{{ data.buyAmount }} 个</span></div>
                        </div>
                    </div>
                </div>
                <div class="block block-rounded">
                    <div class="block-header block-header-default"><h3 class="block-title v2board-trade-no">
                        订单信息</h3>
                        <div class="block-options">
                            <button type="button" class="btn btn-primary btn-sm btn-danger btn-rounded px-3"
                                    @click="closeOrder">
                                关闭订单
                            </button>
                        </div>
                    </div>
                    <div class="block-content pb-4">
                        <div class="v2board-order-info">
                            <div><span>订单号：</span><span>{{ data.outTradeNo }}</span></div>
                            <div><span>创建时间：</span><span>{{ data.CreatedAt }}</span></div>
                        </div>
                    </div>
                </div>
                <div class="block block-rounded js-appear-enabled">
                    <div class="block-header block-header-default"><h3 class="block-title">支付方式</h3>
                        <div class="block-options"></div>
                    </div>
                    <PaymentItem  v-for="payment in this.paymentList"
                                  :key="payment.id"
                                  :payment="payment"/>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="block block-link-pop block-rounded  px-3 py-3 text-light"
                     style="background: rgb(53, 56, 61);"><h5
                        class="text-light mb-3" style="font-size: 18px;">订单总额</h5>
                    <div class="row no-gutters pb-3" style="border-bottom: 1px solid rgb(100, 102, 105);">
                        <div class="col-8">{{ data.title }} x {{ data.buyAmount }}</div>
                    </div>
                    <div class="pt-3" style="color: rgb(100, 102, 105);">总计</div>
                    <h1 class="text-light mt-3 mb-3">¥ {{ data.totalAmount }} CNY</h1>
                    <button type="button" class="btn btn-block btn-primary" @click=Pay v-show=!isRequesting><span><i
                            class="far fa-check-circle"></i> 结账 </span>
                    </button>
                    <button type="button" class="btn btn-block btn-primary" disabled="" v-show=isRequesting><span><i
                            aria-label="type: loading"
                    >
            <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-type="loading" width="1em"
                 height="1em" fill="currentColor" aria-hidden="true">
              <path
                      d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
            </svg>
          </i></span>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div class="ant-modal-root">
                <div :class="isShowQR?'ant-modal-mask':'ant-modal-mask ant-modal-mask-hidden'"></div>
                <div tabindex="-1" class="ant-modal-wrap ant-modal-centered" role="dialog"
                     :style="isShowQR?'':'display: none'">
                    <div role="document" class="ant-modal v2board-payment-qrcode" style="width: 300px;"
                         v-clickOutSide="closeQr">
                        <div tabindex="0" aria-hidden="true"
                             style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
                        <div class="ant-modal-content">
                            <div class="ant-modal-body">
                                <div id="qrcode" ref="qrcode"></div>
                            </div>
                            <div class="ant-modal-footer">
                                <div style="text-align: center;">等待支付中</div>
                            </div>
                        </div>


                        <div tabindex="0" aria-hidden="true"
                             style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QRCode from "qrcodejs2";
import PaymentItem from "@/components/mainpage/user/orderinfo/PaymentItem.vue";
import AdminGoodsSetItem from "@/components/mainpage/admin/goods/AdminGoodsSetItem.vue";

export default {
    name: "OrderWaited",
    components: {AdminGoodsSetItem, PaymentItem},
    props: ["data"],
    data() {
        return {
            isShowQR: 0,
            isRequesting: false,
            paymentList:'',
        }
    },
    watch: {
        $route() {
            this.checkOrder()
            console.log("finish")
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
                delete el.__vueClickOutSize__
            }
        }
    },
    methods: {
        async Pay() {
            let isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            this.isRequesting = true
            const {data: res} = await this.$http.post('pay', {
                "outTradeNo": this.data.outTradeNo,
            })
            if (res.status !== 200) {
                let tip = {
                    tipTitle: "请求失败",
                    tipMsg: res.message,
                    type: false,
                }
                this.$bus.$emit('showTipMsg', tip)
                this.isRequesting = false
                return
            }
            if (isMobile) {
                window.location.href = res.qrUrl
            }
            this.showQr()
            this.qrcodeScan(res.qrUrl)
            this.isRequesting = false
        },

        async getPaymentList() {
            this.isLoading = true
            const {data: res} = await this.$http.get('payment/list')
            this.paymentList = res.data
            this.isLoading = false
        },

        async closeOrder() {
            await this.$http.put('order/cancel', {
                "outTradeNo": this.data.outTradeNo,
            })
            this.$bus.$emit('reloadOrderPage')
        },

        checkOrder() {
            if (this.data.status === 0) {
                this.timer = setInterval(async () => {
                    if (this.$route.fullPath.indexOf("/order/info") !== -1) {
                        const {data: res} = await this.$http.get("order/" + this.data.outTradeNo)
                        if (res.data.status === 1) {
                            this.$bus.$emit('switchOrderStatus', 1)
                            clearInterval(this.timer)
                        }
                        if (res.data.status === 2) {
                            this.$bus.$emit('switchOrderStatus', 2)
                            clearInterval(this.timer)
                        }
                    } else clearInterval(this.timer);
                }, 3000);
            }
        },
        qrcodeScan(qrUrl) { //生成二维码
            new QRCode("qrcode", {
                width: 250, // 二维码宽度
                height: 250, // 二维码高度
                text: qrUrl, // 浏览器地址url
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
            })

        },
        clearQrcode() {
            this.$refs.qrcode.innerHTML = ''
        },

        closeQr() {
            this.isShowQR = false
            this.clearQrcode()
        },
        showQr() {
            this.isShowQR = true
            this.clearQrcode()
        }
    },
    mounted() {
        this.checkOrder()
        this.getPaymentList()
    }
}
</script>

<style scoped>

</style>
