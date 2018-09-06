<template>
    <div>
        <h3>Counters {{count}}</h3>
        <button type="button" @click="increment()">增加1</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment: function() {
                this.count++
            }
        }
    }
</script>

<style scoped>

</style>