<template>
    <div :class="selected === payment.id ? 'v2board-select active border-primary' : 'v2board-select false'">
        <div style="flex: 1 1 0%; padding-top: 4px;" @click=setPayment><label
                :class="selected === payment.id ? 'v2board-select-radio ant-radio-wrapper ant-radio-wrapper-checked' : 'v2board-select-radio ant-radio-wrapper'">
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
    props: ['payment','selected'],
    data() {
        return {
            statusStyle: null,
            status: '',
        }
    },
    methods: {
        setPayment() {
            this.$bus.$emit('switchPM', this.payment.id)
        }
    },
}
</script>

<style scoped>

</style>