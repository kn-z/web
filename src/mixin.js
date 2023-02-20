export const mixin = {
    methods:{
        setSelectorPos() {
            this.selected = !this.selected
            let data = {
                isShow: this.selected,
                x: this.$refs.selector.getBoundingClientRect().left,
                y: this.$refs.selector.getBoundingClientRect().top + this.$refs.selector.offsetHeight,
                w: this.$refs.selector.offsetWidth,
            }
            //Send selector position to SelectDropDownMenu
            this.$bus.$emit('selectorPos', data)
        },
        getName(id){
            const found = this.selectorList.find(item => item.id === id)
            if(found){
                return found.name
            }
            return "null"
        },
    }
}