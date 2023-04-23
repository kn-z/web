<template>
    <nav id="sidebar">
        <div class="smini-hidden bg-header-dark">
            <div class="content-header justify-content-lg-center bg-black-10">
                <a class="link-fx font-size-lg text-white" href="">
                    <span class="text-white-75">{{ webName }}</span></a>
                <div class="d-lg-none">
                    <a class="text-white ml-2" data-toggle="layout" data-action="sidebar_close"
                       href="javascript:void(0);">
                        <i class="fa fa-times-circle" @click="CloseSide"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="content-side content-side-full">
            <SideBarList :side-dict="sideDict"/>
        </div>
        <div class="v2board-copyright">{{webName}} {{webVersion}}</div>
    </nav>
</template>

<script>
import SideBarList from "@/components/sidebar/SideBarList";

export default {
    name: "SideBar",
    props: ['sideDict'],
    components: {
        SideBarList
    },
    data() {
        return {
            webName: 'web',
            webVersion: 'v1.0',
            flag: '01',
        }
    },
    methods: {
        CloseSide() {
            this.$bus.$emit('switchSide', 0)
        }
    },
    mounted() {
        const infoJson = require('../../../package.json')
        this.webName = infoJson.name
        this.webVersion = infoJson.version
    }
}

</script>

<style scoped>

</style>
