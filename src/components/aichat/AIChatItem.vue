<template>
    <div>
        <div class="font-size-sm text-muted my-2">{{ "\t\t\t" + item.type }}</div>
        <div class="mr-4">
            <div :class="item.type==='Human'? 'd-inline-block bg-success-lighter px-3 py-2 mb-2 mw-100 rounded text-left' : 'd-inline-block bg-gray-lighter px-3 py-2 mb-2 mw-100 rounded text-left'">
                <a :style="item.type==='ERROR' ? 'font-weight: bold;color: rgb(255, 77, 79)' : ''"> {{item.msg + waitingLabel}}</a>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AIChatItem",
    props: ["item"],
    data() {
        return {
            waitingLabel: '',
        }
    },
    computed: {},
    methods: {
        startTimer() {
            clearInterval(this.timer)
            this.timer = setInterval(() => {
                if (this.item.type ==='AI') {
                    this.waiting()
                }
                if(this.item.fin){
                    this.waitingLabel = ''
                    clearInterval(this.timer)
                }
            }, 500); // 注意: 第一个参数为方法名的时候不要加括号;
        },

        waiting() {
            if (this.waitingLabel === "▋") {
                this.waitingLabel = '_'
            } else {
                this.waitingLabel = '▋'
            }
        },
    },
    mounted() {
        if (this.item.type === 'AI') {
            this.startTimer()
        }
    }
}
</script>

<style scoped>

</style>