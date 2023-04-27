<template>
    <div class="ant-drawer-body">
        <div>
            <div>
                <div class="form-group"><label for="example-text-input-alt">名称显示</label><input
                        placeholder="用于前端显示使用" type="text" class="ant-input" v-model="payment.name"></div>
                <div class="form-group"><label for="example-text-input-alt">图标url</label><input
                        placeholder="用于前端显示使用" type="text" class="ant-input" v-model="payment.image"></div>
                <div class="form-group" title="接口类型"><label><span>接口类型</span></label>
                    <div @click="setSelectorPos(payment.type)" ref="selector"
                         :class="selected ? 'ant-select ant-select-open ant-select-focused ant-select-enabled form-group' : 'ant-select ant-select-enabled form-group'"
                         style="width: 100%;">
                        <div class="ant-select-selection ant-select-selection--single" role="combobox"
                             aria-autocomplete="list" aria-haspopup="true"
                             aria-controls="63c5b191-6ada-4935-d770-5a29756e6295"
                             aria-expandant-select-selection__rendereded="false" tabindex="0">
                            <div class="ant-select-selection__rendered">
                                <div class="ant-select-selection-selected-value"
                                     style="display: block; opacity: 1;">{{ getName(payment.type) }}
                                </div>
                            </div>
                            <span class="ant-select-arrow" unselectable="on" style="payment-select: none;"><i
                                    aria-label="图标: down"
                                    class="anticon anticon-down ant-select-arrow-icon"><svg
                                    viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em"
                                    height="1em"
                                    fill="currentColor" aria-hidden="true"><path
                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                        </div>
                    </div>
                </div>
                <div class="form-group"><label for="example-text-input-alt">APPID*</label><input
                        placeholder="" type="text" class="ant-input" v-model="payment.profile.app_id"></div>
                <div class="form-group"><label for="example-text-input-alt">私钥*</label>
                    <div><textarea rows="4" class="ant-input"
                                   v-model=payment.profile.private_key></textarea>
                    </div>
                </div>
                <div class="form-group"><label for="example-text-input-alt">公钥*</label>
                    <div><textarea rows="4" class="ant-input"
                                   v-model=payment.profile.public_key></textarea>
                    </div>
                </div>
                <div class="form-group"><label for="example-text-input-alt">自定义商品名称</label><input
                        placeholder="" type="text" class="ant-input" v-model="payment.profile.product_name"></div>
                <div class="form-group"><label for="example-text-input-alt">回调域名*</label><input
                        placeholder="" type="text" class="ant-input" v-model="payment.notify_domain"></div>
            </div>
            <div class="v2board-drawer-action" style="float: right">
                <button @click=close type="button" class="ant-btn" style="margin-right: 8px;"><span>取 消</span>
                </button>
                <button @click=submit v-show="!isSubmit" type="button" class="ant-btn ant-btn-primary">
                    <span>提 交</span>
                </button>
                <button v-show="isSubmit" type="button" class="ant-btn ant-btn-primary ant-btn-loading"
                        ant-click-animating-without-extra-node="false"><i aria-label="图标: loading"
                                                                          class="anticon anticon-loading">
                    <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-icon="loading"
                         width="1em"
                         height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                    </svg>
                </i><span>提 交</span></button>
            </div>
        </div>
    </div>
</template>

<script>

import {mixin} from "@/mixin";

export default {
    name: "SetPayment",
    props: ['pageDict', 'dictKey'],
    mixins: [mixin],
    data() {
        return {
            id: '',
            isSubmit: false,
            selected: false,
            selectorList: [],
            type: '',
            payment: {
                name: '',
                image: '',
                notify_domain: '',
                profile: {
                    app_id: '',
                    public_key: '',
                    private_key: '',
                    product_name: '',
                },
                type: ''
            },
        }
    },
    methods: {
        async getPayment() {
            const {data: res} = await this.$http.get('payment/' + this.id)
            if (res.status !== 200) {
                return
            }
            this.payment = res.data
            try {
                this.payment.profile = JSON.parse(res.data.profile)
            } catch (e) {
                this.payment.profile = ""
            }
            setTimeout(() => {
                this.$bus.$emit('RBLoaded')
            }, 200);
        },

        async submit() {
            this.isSubmit = true
            if (this.payment.notify_domain.length === 0 || this.payment.profile.app_id.length === 0 || this.payment.profile.private_key.length === 0 || this.payment.profile.public_key.length === 0) {
                let tip = {
                    tipTitle: "请求失败",
                    tipMsg: "带*为必填项",
                    type: false,
                }
                this.$bus.$emit('showTipMsg', tip)
                this.isSubmit = false
                return
            }
            let res = {}
            if (this.type === 'A') {
                const {data: resp} = await this.$http.post('payment/add', {
                    "name": this.payment.name,
                    "image": this.payment.image,
                    "notify_domain": this.payment.notify_domain,
                    "profile": JSON.stringify({
                        "app_id": this.payment.profile.app_id,
                        "public_key": this.payment.profile.public_key,
                        "private_key": this.payment.profile.private_key,
                        "product_name": this.payment.profile.product_name,
                    }),
                    "type": this.payment.type,
                })
                res = resp
            } else {
                const {data: resp} = await this.$http.put('payment/' + this.id, {
                    "name": this.payment.name,
                    "image": this.payment.image,
                    "notify_domain": this.payment.notify_domain,
                    "profile": JSON.stringify({
                        "app_id": this.payment.profile.app_id,
                        "public_key": this.payment.profile.public_key,
                        "private_key": this.payment.profile.private_key,
                        "product_name": this.payment.profile.product_name,
                    }),
                    "type": this.payment.type,
                })
                res = resp
            }
            if (res.status !== 200) {
                let tip = {
                    tipTitle: "请求失败",
                    tipMsg: res.message,
                    type: false,
                }
                this.$bus.$emit('showTipMsg', tip)
                this.isSubmit = false
                return
            }
            this.isSubmit = false
            this.close()
            this.$bus.$emit(this.pageDict[this.dictKey].methodName, 0)
            this.clear()
        },

        close() {
            this.$bus.$emit('closeRB')
        },

        clear() {
            this.payment = {
                name: '',
                image: '',
                notify_domain: '',
                profile: {
                    app_id: '',
                    public_key: '',
                    private_key: '',
                    product_name: '',
                },
                type: ''
            }
        }
    },
    mounted() {
        this.$bus.$on(this.pageDict[this.dictKey].reloadRBName, (data) => {
            this.id = data
            this.getPayment()
        })

        this.$bus.$on(this.pageDict[this.dictKey].getRBTName, (type) => {
            this.type = type
            if (this.type === 'A') {
                this.clear()
            }
        })

        this.$bus.$on('selectorClose', () => {
            this.selected = false
        })

        //Get selector List
        this.$bus.$on('selectorList', (data) => {
            this.selectorList = data
        })

        //Get selected ID
        this.$bus.$on('selectorID', (id) => {
            this.payment.type = id
        })
    }
}
</script>

<style scoped>

</style>