<template>
    <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
        <div>
            <div :class="selected ? 'ant-tooltip ant-tooltip-placement-right':'ant-tooltip ant-tooltip-placement-right ant-tooltip-hidden'"
                 style="left: 470px; top: 80px; transform-origin: -4px 50%;">
                <div class="ant-tooltip-content">
                    <div class="ant-tooltip-arrow"></div>
                    <div class="ant-tooltip-inner" role="tooltip">
                        Tips：可以使用过滤器过滤后再使用操作对过滤的用户进行操作。
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tips"
}
</script>

<style scoped>

</style>