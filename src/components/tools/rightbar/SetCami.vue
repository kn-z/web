<template>
    <div class="ant-drawer-body">
        <div>
            <div>
                <div class="form-group"><label><span>所属商品</span></label>
                    <div @click="setSelectorPos(cami.goodsId)" ref="selector"
                         :class="selected ? 'ant-select ant-select-open ant-select-focused ant-select-enabled form-group' : 'ant-select ant-select-enabled form-group'"
                         style="width: 100%;">
                        <div class="ant-select-selection ant-select-selection--single" role="combobox"
                             aria-autocomplete="list" aria-haspopup="true"
                             aria-controls="63c5b191-6ada-4935-d770-5a29756e6295"
                             aria-expandant-select-selection__rendereded="false" tabindex="0">
                            <div class="ant-select-selection__rendered">
                                <div class="ant-select-selection-selected-value" title="无"
                                     style="display: block; opacity: 1;">{{ getName(cami.goodsId) }}
                                </div>
                            </div>
                            <span class="ant-select-arrow" unselectable="on" style="goods-select: none;"><i
                                    aria-label="图标: down"
                                    class="anticon anticon-down ant-select-arrow-icon"><svg
                                    viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em"
                                    height="1em"
                                    fill="currentColor" aria-hidden="true"><path
                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                        </div>
                    </div>
                </div>
                <div class="form-group"><label for="example-text-input-alt">批量导入</label>
                    <div>
                        <button @click="isBatch = 1 - isBatch" type="button" role="switch" aria-checked="true"
                                :class="isBatch ? 'ant-switch ant-switch-checked':'ant-switch'"><span
                            class="ant-switch-inner"></span></button>
                    </div>
                </div>
                <div class="form-group"><label for="example-text-input-alt">卡密</label>
                    <div><textarea rows="4" :placeholder="'这里请在输入卡密\n批量导入则1行1个'" class="ant-input" v-model=cami.cami></textarea>
                    </div>
                </div>
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
                    <svg viewBox="0 0 1024 1024" focusable="false" class="anticon-spin" data-icon="loading" width="1em"
                         height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                    </svg>
                </i><span>提 交</span></button>
            </div>
        </div>
    </div>
</template>

<script>
import {mixin} from '@/mixin'

export default {
    name: "EditCami",
    props: ['pageDict', 'dictKey'],
    mixins: [mixin],
    data() {
        return {
            id: '',
            isSubmit: false,
            selected: false,
            selectorList: [],
            type: '',
            isBatch: false,
            cami: {
                status: '', goodsId: '', outTradeNo: '', cami: '',
            },
        }
    },
    methods: {
        async getCami() {
            const {data: res} = await this.$http.get('item/' + this.id)
            if (res.status !== 200) {
                return
            }
            this.cami = res.data
            setTimeout(() => {
                this.$bus.$emit('RBLoaded')
            }, 200);
        },


        async submit() {
            this.isSubmit = true
            if (this.cami.goodsId === '' || this.cami.cami === '') {
                let tip = {
                    tipTitle: "请求失败",
                    tipMsg: "请输入完整信息",
                    type: false,
                }
                this.$bus.$emit('showTipMsg', tip)
                this.isSubmit = false
                return
            }
            let res = {}
            if (this.type === 'A') {
                if (this.isBatch){
                    const {data: resp} = await this.$http.post('item/add/batch', {
                        "goodsId": parseInt(this.cami.goodsId),
                        "cami": this.cami.cami,
                    })
                    res = resp
                }
                else {
                    const {data: resp} = await this.$http.post('item/add', {
                        "goodsId": parseInt(this.cami.goodsId),
                        "cami": this.cami.cami,
                    })
                    res = resp
                }
            } else {
                const {data: resp} = await this.$http.put('item/' + this.id, {
                    "status": this.cami.status,
                    "goodsId": parseInt(this.cami.goodsId),
                    "outTradeNo": this.cami.outTradeNo,
                    "cami": this.cami.cami,
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
            this.cami = {
                status: '', goodsId: '', outTradeNo: '', cami: ''
            }
        },
    },
    mounted() {
        this.$bus.$on(this.pageDict[this.dictKey].reloadRBName, (data) => {
            this.id = data
            this.getCami()
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
        this.$bus.$on('selectorList', (data) => {
            this.selectorList = data
        })
        //Get selected ID
        this.$bus.$on('selectorID', (id) => {
            this.cami.goodsId = id
        })
    }
}
</script>

<style scoped>

</style>