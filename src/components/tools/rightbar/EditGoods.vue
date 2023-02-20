<template>
    <div class="ant-drawer-body">
        <div>
            <div>
                <div class="form-group"><label for="example-text-input-alt">名称</label><input
                        placeholder="请输入商品名称" type="text" class="ant-input" v-model="goods.title"></div>
                <div class="form-group">
                    <div class="ant-col ant-col-md-12">
                        <div class="form-group"><label for="example-text-input-alt">商品单价</label><span
                                class="ant-input-group-wrapper"><span class="ant-input-wrapper ant-input-group"><input
                                type="text"
                                class="ant-input"
                                v-model="showPrice"><span
                                class="ant-input-group-addon">CNY</span></span></span></div>
                    </div>
                    <div class="form-group"><label><span>所属类别</span></label>
                        <div @click="setSelectorPos" ref="selector"
                             :class="selected ? 'ant-select ant-select-open ant-select-focused ant-select-enabled form-group' : 'ant-select ant-select-enabled form-group'"
                             style="width: 100%;">
                            <div class="ant-select-selection ant-select-selection--single" role="combobox"
                                 aria-autocomplete="list" aria-haspopup="true"
                                 aria-controls="63c5b191-6ada-4935-d770-5a29756e6295"
                                 aria-expandant-select-selection__rendereded="false" tabindex="0">
                                <div class="ant-select-selection__rendered">
                                    <div class="ant-select-selection-selected-value" title="无"
                                         style="display: block; opacity: 1;">{{ getName(goods.cateId) }}
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
                    <div>
                        <div class="form-group"><label for="example-text-input-alt">图片url</label><input
                                placeholder="请输入图片链接"
                                type="text" class="ant-input"
                                v-model=goods.image
                        ></div>
                    </div>
                </div>
                <div class="form-group"><label for="example-text-input-alt">商品描述</label>
                    <div><textarea rows="4" placeholder="请在这里记录.." class="ant-input"
                                   v-model=goods.content></textarea></div>
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
                        <path
                                d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                    </svg>
                </i><span>提 交</span></button>
            </div>
        </div>
    </div>
</template>

<script>
import {mixin} from '@/mixin'

export default {
    name: "EditGoods",
    props: ['pageDict', 'dictKey'],
    mixins: [mixin],
    data() {
        return {
            id: '',
            isSubmit: false,
            selected: false,
            selectorList: [],
            goods: {
                title: '', price: '', name: '', image: '', content: '',
            },
        }
    },
    computed: {
        showPrice: {
            get() {
                return this.goods.price / 100
            },
            set(newValue) {
                this.goods.price = newValue * 100
                return this.goods.price / 100
            }
        }
    },
    methods: {
        async getGoods() {
            const {data: res} = await this.$http.get('good/' + this.id)
            if (res.status !== 200) {
                return
            }
            this.goods = res.data
            setTimeout(() => {
                this.$bus.$emit('RBLoaded')
            }, 200);
        },

        async submit() {
            this.isSubmit = true
            if (this.goods.title === '' || this.goods.price === '') {
                let tip = {
                    tipTitle: "请求失败",
                    tipMsg: "请输入信息完整",
                    type: false,
                }
                this.$bus.$emit('showTipMsg', tip)
                this.isSubmit = false
                return
            }

            const {data: res} = await this.$http.put('good/' + this.id, {
                "title": this.goods.title,
                "price": this.goods.price,
                "image": this.goods.image,
                "content": this.goods.content,
                "cateId": this.goods.cateId,
                "status": this.goods.status,
            })
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
            this.goods = {
                title: '', price: '', name: '', image: '', content: '',
            }
        }
    },
    mounted() {
        this.$bus.$on(this.pageDict[this.dictKey].reloadRBName, (data) => {
            this.id = data
            this.getGoods()
        })
        this.$bus.$on(this.pageDict[this.dictKey].clearRBName, () => {
            this.clear()
        })
        this.$bus.$on('selectorClose', () => {
            this.selected = false
        })
        //Get selectrooList
        this.$bus.$on('selectorList', (data) => {
            this.selectorList = data
        })
    }
}
</script>

<style scoped>

</style>