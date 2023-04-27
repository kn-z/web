<template>
    <div :class="focusTo === payment.id ? 'v2board-select active border-primary' : 'v2board-select false'">
        <div style="flex: 1 1 0%; padding-top: 4px;" @click=setPayment><label
                :class="focusTo === payment.id ? 'v2board-select-radio ant-radio-wrapper ant-radio-wrapper-checked' : 'v2board-select-radio ant-radio-wrapper'">
        </label>{{ payment.name }}
        </div>
        <div style="flex: 1 1 0%; text-align: right;"><img height="30"
                                                           :src=payment.image>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaymentItem",
    props: ['payment'],
    data() {
        return {
            focusTo: 1,
            statusStyle: null,
            status: '',
        }
    },
    methods: {
        setPayment() {
            this.$bus.$emit('switchPMFocus', this.payment.id)
        }
    },
    mounted() {
        this.$bus.$on('switchPMFocus', (data) => {
            this.focusTo = data
        })
    }
}
</script>

<style scoped>

</style>