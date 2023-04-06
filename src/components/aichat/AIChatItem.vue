<template>
    <div>
        <div class="font-size-sm text-muted my-2">{{ "\t\t\t" + item.type }}</div>
        <div class="mr-4">

<!--            <div v-for="(item, index) in msg" :key="index">-->
<!--                <p v-if="index % 2 === 0">{{ item }}</p>-->
<!--                <a v-if="index % 2 === 1"><pre ><code>{{ item }}</code></pre></a>-->
<!--            </div>-->

            <div v-if="!mode"
                 :class="item.type==='Human'? 'd-inline-block bg-success-lighter px-3 py-2 mb-2 mw-100 rounded text-left' : 'd-inline-block bg-gray-lighter px-3 py-2 mb-2 mw-100 rounded text-left'">
                <a :style="item.type==='ERROR' ? 'font-weight: bold;color: rgb(255, 77, 79)' : ''">
                    <pre>{{ item.msg + waitingLabel }}</pre>
                </a>
            </div>

            <div v-if="mode"
                 :class="item.type==='Human'? 'd-inline-block bg-success-lighter px-3 py-2 mb-2 mw-100 rounded text-left' : 'd-inline-block bg-gray-lighter px-3 py-2 mb-2 mw-100 rounded text-left'">
                <a :style="item.type==='ERROR' ? 'font-weight: bold;color: rgb(255, 77, 79)' : ''">{{ item.msg + waitingLabel }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default {
    name: "AIChatItem",
    props: ["item", "mode"],
    data() {
        return {
            waitingLabel: '',
            msg: '',
        }
    },
    watch: {
        'item.msg'(newVal, oldVal) {
            this.msg = newVal.split("```")
        },
    },
    computed: {
        'content'(){
            let cont = ''
            for (let i=0; i< this.msg.length; i++){
                cont += this.msg[i]
            }
            return cont
        }
    },
    methods: {
        startTimer() {
            this.waiting()
            clearInterval(this.timer)
            this.timer = setInterval(() => {
                if (this.item.type === 'AI') {
                    this.waiting()
                }
                if (this.item.fin) {
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
        this.$nextTick(() => {
            const codeBlocks = this.$el.querySelectorAll('pre code');
            codeBlocks.forEach((code) => {
                hljs.highlightBlock(code);
            });
        });
    }
}
</script>

<style scoped>
pre {
    display: block;
    font-family: monospace;
    white-space: pre-wrap;
}

.black {
    background-color: #fff;
    color: #a73b13;
}
</style>