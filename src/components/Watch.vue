<template>
    <div>
        <input type="text" v-model="name">
    </div>

    {{ name }}

    <p v-if="nO">{{ nO }}</p>
</template>

<script>
export default {
    name: "Watch",
    data() {
        return {
            name: "",
            nO: ""
        }
    },

    watch: {
        name(nV, oV) {
            return this.nO = `${nV} ${oV}`
        }
    }
}
</script>