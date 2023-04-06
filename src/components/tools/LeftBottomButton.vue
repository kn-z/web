<template>
    <a class="btn btn-hero-primary btn-rounded px-4"
       @click="show"
       style="text-transform: none;color: #fff;position: fixed; bottom: 10px;  right: 10px;"><i class="fa fa-comments" aria-hidden="true"></i>&nbsp;Chat</a>
</template>

<script>
export default {
    name: "LeftBottomButton",
    methods:{
        show() {
            let isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            if (isMobile){
                this.$router.push({name: 'aiChatView'},onComplete => {},
                    onAbort => {})
            }
            else{
                const width = 450
                const height = 650
                window.open(this.$host + "/#/chat",'','width='+width+',height='+height);
            }
        }
    },
}
</script>

<style scoped>

</style>