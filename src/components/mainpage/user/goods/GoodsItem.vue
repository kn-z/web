<template>
    <div class="col-md-12 col-xl-4" @click="this.goodInfo"><a class="block block-link-pop block-rounded m-3 mx-xl-0">
        <div data-v-42f4bad4="" class="block-header plan" style="justify-content: space-around;">
            <canvas width="250" height="250" style="display: none;"></canvas>
            <img object-fit="contain" alt="pic"
                 style="display: block;text-align: center;max-width: 100%; max-height: 100%;" :src=goods.image>
            <!--          <img object-fit="contain" alt="pic" style="display: block;text-align: center;" :src=goods.image>-->
        </div>
        <!--    <div class="block-header plan"><h3 class="block-title">{{ good.title }}</h3>-->
        <!--    </div>-->
        <div class="block-content bg-body" style="display: block;text-align: center;">
            <div class="py-2"><p class="h3 mb-2">{{ goods.title }}</p>
                <p class="ant-tag mt-2" style="font-size: 15px;">¥ {{
                    (goods.price / 100).toLocaleString('zh', {style: 'currency', currency: 'CNY'}).split('¥')[1]
                    }}</p>
                <p :class="goods.stock ? 'ant-tag-green ant-tag mt-2' : 'ant-tag-red ant-tag mt-2'"
                   style="font-size: 15px; ">库存 {{ goods.stock }} 个</p></div>
        </div>
        <div class="block-content py-3">
            <div class="mb-3">
                <p align="center">
                    <i style="  color: #495057;">
                    </i>{{ goods.content }}</p>
            </div>
        </div>
    </a></div>
</template>

<script>
export default {
    name: "GoodsItem",
    props: ["goods"],
    methods: {
        async goodInfo() {
            await this.$router.push({name: 'goodsInfo', params: {id: this.goods.id}})
            this.$bus.$emit('switchMainContainer', '03');
        }
    },
}
</script>

<style scoped>

</style>
