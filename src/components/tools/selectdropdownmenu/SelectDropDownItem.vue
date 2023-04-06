<template>
    <li role="option" unselectable="on" @mouseover="clearFocus" @mouseleave="clearFocus"
        :class="count ? style : initStyle"
        aria-selected="false"
        style="user-select: none;"
        @click="changeKey">{{ item.name }}
    </li>
</template>

<script>
export default {
    name: "SelectDropDownItem",
    props: ['id', 'item'],
    data() {
        return {
            count: 0,
            style: '',
        }
    },
    computed:{
        initStyle(){
            return this.id === this.item.id ? 'ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active ant-select-dropdown-menu-item-selected ' : 'ant-select-dropdown-menu-item'
        }
    },
    watch: {
        'count'() {
            if (this.id !== this.item.id) {
                this.style = 'ant-select-dropdown-menu-item '
            }
            if (this.id === this.item.id) {
                this.style = 'ant-select-dropdown-menu-item ant-select-dropdown-menu-item-selected '
            }
        }
    },
    methods: {
        clearFocus() {
            this.count += 1
        },
        changeKey() {
            //Send selected id to SelectDropDownMenu
            this.$bus.$emit('selectorID', this.item.id)
        },
    },
    mounted() {
        this.$bus.$on('SelectDropDownItem_ClearCount', () => {
            this.count = 0
        })
    }
}
</script>

<style scoped>

</style>