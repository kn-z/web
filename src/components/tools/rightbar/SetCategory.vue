<template>
    <div class="ant-drawer-body">
        <div>
            <div>
                <div class="form-group"><label for="example-text-input-alt">类名</label><input
                        placeholder="请输入类名" type="text" class="ant-input" v-model="category.name"></div>
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
export default {
    name: "EditCategory",
    props: ['pageDict', 'dictKey'],
    data() {
        return {
            id: '',
            isSubmit: false,
            category: {
                name: '',
            },
        }
    },
    methods: {
        async getCategory() {
            const {data: res} = await this.$http.get('category/' + this.id)
            if (res.status !== 200) {
                return
            }
            this.category = res.data
            setTimeout(() => {
                this.$bus.$emit('RBLoaded')
            }, 200);
        },

        changRole() {
            this.user.role = 1 - this.user.role
        },

        async submit() {
            this.isSubmit = true
            if (this.category.name === '') {
                let tip = {
                    tipTitle: "请求失败",
                    tipMsg: "请输入有效类名",
                    type: false,
                }
                this.$bus.$emit('showTipMsg', tip)
                this.isSubmit = false
                return
            }

            let res = {}
            if (this.type === 'A') {
                const {data: resp} = await this.$http.post('category/add', {
                    "name": this.category.name,
                    "status": 1,
                })
                res = resp
            }else {
                const {data: resp} = await this.$http.put('category/' + this.id, {
                    "name": this.category.name,
                    "status": 1,
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
            this.category = {
                name: '',
            }
        }
    },
    mounted() {
        this.$bus.$on(this.pageDict[this.dictKey].reloadRBName, (data) => {
            this.id = data
            this.getCategory()
        })

        this.$bus.$on(this.pageDict[this.dictKey].getRBTName, (type) => {
            this.type = type
            if (this.type === 'A') {
                this.clear()
            }
        })
    }
}
</script>

<style scoped>

</style>