<template>
    <div>
        <button type="button" @click="getData('get data')">取数据</button>
        <h3>{{value}}</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: undefined
            }
        },
        methods: {
            getData: async function(value) {
                const data = await this.promise(value);
                this.value = data;
                // return data;
            },
            promise: function(value) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(value)
                    }, 0);
                });
            }
        }
    }
</script>

<style scoped>

</style>