export const mixin = {
    methods:{
        setSelectorPos(focusedID) {
            this.selected = !this.selected
            let data = {
                isShow: this.selected,
                x: this.$refs.selector.getBoundingClientRect().left,
                y: this.$refs.selector.getBoundingClientRect().top + this.$refs.selector.offsetHeight,
                w: this.$refs.selector.offsetWidth,
            }
            //Send selector position to SelectDropDownMenu
            this.$bus.$emit('selectorPos', data)
            this.$bus.$emit('selectorFocusedID', focusedID)
        },

        getName(id){
            const found = this.selectorList.find(item => item.id === id)
            if(found){
                return found.name
            }
            return "请选择"
        },

        sideBarMounted(){
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

            this.$bus.$on(this.pageDict[this.dictKey].clearRBName, () => {
                this.clear()
            })
        }
    }
}