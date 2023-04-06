<template>
    <ul>
        <li
            v-for="(item, index) in itemList"
            :key="index"
            :style="{ left: item.left + 'px', top: item.top + 'px' }"
            @mousedown="onMouseDown(index, $event)"
        >
            {{ item.name }}
        </li>
    </ul>

</template>

<script>
export default {
    data() {
        return {
            itemList: [
                { name: "Item A", left: 0, top: 0 },
                { name: "Item B", left: 100, top: 0 },
                { name: "Item C", left: 200, top: 0 }
            ],
            isDragging: false,
            currentIndex:-1,
            startX:null,
            startY:null
        };
    },

    mounted(){
        document.addEventListener('mouseup',this.onMouseUp)
    },

    beforeDestroy(){
        document.removeEventListener('mouseup',this.onMouseUp)
    },

    methods:{
        onMouseDown(index,event){
            this.isDragging = true;
            this.currentIndex = index;
            this.startX = event.clientX;
            this.startY = event.clientY;

            // 防止点击选中文本或者其他元素
            event.preventDefault();
            event.stopPropagation();
        },

        onMouseMove(event){
            if (this.isDragging && this.currentIndex != -1) {
                const offsetX = event.clientX - this.startX;
                const offsetY = event.clientY - this.startY;

                // 更新组件位置
                const currentItem=this.itemList[this.currentIndex]
                currentItem.left += offsetX;
                currentItem.top += offsetY;

                // 更新起始坐标
                this.startX = event.clientX;
                this.startY = event.clientY;

                console.log('x:',currentItem.left,'y:',currentItem.top)
            }
        },

        onMouseUp(event){
            if(this.isDragging){
                console.log('release mouse')
                // 结束拖放操作
                this.isDragging=false

                // 恢复当前项索引值为-1
                this.currentIndex=-1

                // 防止冒泡并触发其他元素上注册的mouseup事件
                event.preventDefault()
            }
        }
    }
};
</script>