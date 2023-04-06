<template>
    <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
        <div>
            <div v-clickOutSide="close"
                 :class="this.selectDropDown.isShow ? 'ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft' : 'ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft ant-select-dropdown-hidden'"
                 :style="'width:'+ this.selectDropDown.w +'px; left:' +this.selectDropDown.x+'px; top: '+this.selectDropDown.y+'px;'">
                <div id="b1f80ee7-c114-4d6d-f9aa-df2f7e6cbb28" style="overflow: auto; transform: translateZ(0px);">
                    <ul role="listbox"
                        class="ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical"
                        tabindex="0" ref="selectDropDown" v-click-out-side="">
                        <SelectDropDownItem :id=id
                                            v-for="item in this.data"
                                            :key="item.id"
                                            :item="item"/>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SelectDropDownItem from "@/components/tools/selectdropdownmenu/SelectDropDownItem";

export default {
    name: "SelectDropDownMenu",
    components: {
        SelectDropDownItem,
    },
    data() {
        return {
            selectDropDown: {
                isShow: false,
                x: 0,
                y: 0,
                w: 0,
            },
            id: '',
            data: '',
        }
    },
    directives: {
        clickOutSide: {
            bind(el, binding) {
                function documentHandler(e) {
                    // console.log(e.target.className)
                    if (e.target.className === "ant-select-selection__rendered" || e.target.className === "ant-select-selection ant-select-selection--single" || JSON.stringify(e.target.className) === "{}") {
                        return false
                    }
                    if (e.target.className === "ant-btn-group" || e.target.className === "ant-btn ant-dropdown-trigger" || e.target.className === "" || e.target.className === ""){
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
        close() {
            this.$bus.$emit('selectorClose')
            this.$bus.$emit('SelectDropDownItem_ClearCount')
            this.selectDropDown.isShow = false
        }
    },

    mounted() {
        //Get selector position
        this.$bus.$on('selectorPos', (data) => {
            this.selectDropDown = data
        })

        //Get selector data list
        //data format as [{id:0,name:"item1"},{id:1,name:"item2"}]
        this.$bus.$on('selectorData', (data) => {
            this.data = data
        })

        //Get selector focused id
        this.$bus.$on('selectorFocusedID', (data) => {
            this.id = data
        })
    }
}
</script>

<style scoped>

</style>