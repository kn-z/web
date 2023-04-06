<template>
    <div class="ant-drawer-body">
        <div>
            <div>
                <div class="form-group"><label for="example-text-input-alt">邮箱</label><input
                        placeholder="请输入邮箱" type="text" class="ant-input" v-model="user.email"></div>
                <div class="form-group"><label for="example-text-input-alt">密码</label><input
                        placeholder="如需修改密码请输入" type="text" class="ant-input" v-model="user.password"></div>
                <div class="form-group"><label for="example-text-input-alt">账户状态</label>
                    <div @click="setSelectorPos(user.status)" ref="selector"
                         :class="selected ? 'ant-select ant-select-open ant-select-focused ant-select-enabled form-group' : 'ant-select ant-select-enabled form-group'" style="width: 100%;">
                        <div class="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
                             aria-controls="16d1a065-0111-40bc-8a1f-6a488f856939" aria-expanded="false" tabindex="0">
                            <div class="ant-select-selection__rendered">
                                <div class="ant-select-selection-selected-value" title="正常"
                                     style="display: block; opacity: 1;">{{ getName(user.status) }}
                                </div>
                            </div>
                            <span class="ant-select-arrow" unselectable="on" style="user-select: none;"><i
                                    aria-label="图标: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                                    viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em"
                                    height="1em" fill="currentColor" aria-hidden="true"><path
                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></i></span>
                        </div>
                    </div>
                </div>
                <div class="form-group"><label for="example-text-input-alt">是否管理员</label>
                    <div>
                        <button @click=changRole type="button" role="switch" aria-checked="true"
                                :class="user.role ? 'ant-switch ant-switch-checked':'ant-switch'"><span
                                class="ant-switch-inner"></span></button>
                    </div>
                </div>
                <div class="form-group"><label for="example-text-input-alt">备注</label>
                    <div><textarea rows="4" placeholder="请在这里记录.." class="ant-input"
                                   v-model=user.content></textarea></div>
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

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export default {
    name: "EditUser",
    props: ['pageDict', 'dictKey'],
    mixins: [mixin],
    data() {
        return {
            id: '',
            isSubmit: false,
            selected: false,
            selectorList: [{id: 0, name: '正常'}, {id: 1, name: '封禁'}],
            user: {
                email: '', role: '', password: '', content: '', status: 0
            },
        }
    },
    methods: {
        async getUser() {
            const {data: res} = await this.$http.get('user/' + this.id)
            if (res.status !== 200) {
                return
            }
            this.user = res.data
            this.user.password = ''
            setTimeout(() => {
                this.$bus.$emit('RBLoaded')
            }, 200);
        },

        changRole() {
            this.user.role = 1 - this.user.role
        },

        async submit() {
            this.isSubmit = true
            if (this.user.email === '' || !validateEmail(this.user.email)) {
                let tip = {
                    tipTitle: "请求失败",
                    tipMsg: "请输入有效邮箱",
                    type: false,
                }
                this.$bus.$emit('showTipMsg', tip)
                this.isSubmit = false
                return
            }

            let res = {}
            if (this.type === 'A') {
                const {data: resp} = await this.$http.post('user/add', {
                    "email": this.user.email,
                    "role": this.user.role,
                    "password": this.user.password,
                    "content": this.user.content,
                    "status": this.user.status,
                })
                res = resp
            } else {
                const {data: resp} = await this.$http.put('user/' + this.id, {
                    "email": this.user.email,
                    "role": this.user.role,
                    "password": this.user.password,
                    "content": this.user.content,
                    "status": this.user.status,
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

        getName(id) {
            const found = this.selectorList.find(item => item.id === id)
            if (found) {
                return found.name
            }
            return "请选择"
        },

        close() {
            this.$bus.$emit('closeRB')
        },

        clear() {
            this.user = {
                email: '', role: '', password: '', content: '', status: ''
            }
        }
    },

    mounted() {
        this.$bus.$on(this.pageDict[this.dictKey].reloadRBName, (data) => {
            this.id = data
            this.getUser()
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

        //Get selected ID
        this.$bus.$on('selectorID', (id) => {
            this.user.status = id
        })
    }
}

</script>

<style scoped>

</style>