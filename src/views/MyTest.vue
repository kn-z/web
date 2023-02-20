<template>
    <div id="cursor"></div>
</template>

<script>
export default {
    name: "MyTest",
    data() {
        return {
        }
    },
    methods: {
        blink() {
            const cursor = document.getElementById("cursor");
            setInterval(function () {
                cursor.style.visibility = (cursor.style.visibility == "visible" ? "hidden" : "visible");
            }, 500);
        }
    },
    mounted() {
        this.blink()
    }
}
</script>

<style scoped>
#cursor {
    display: inline-block;
    width: 1ch;
    height: 1.2em;
    margin-left: 2px;
    background-color: black;
}
</style>
