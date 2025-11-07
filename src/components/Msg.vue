<template>
    <div :class="baseClass">
        {{ mensagem }}
    </div>
</template>

<script>
export default {
    name: "Msg",
    props: {
        mensagem: String,
        tipoMsg: String
    },
    computed: {
        baseClass() {
            return [
                'alert',
                this.tipoMsg ? `alert${this.tipoMsg}` : ""
            ]
        }
    }
}
</script>

<style scoped>
.alert {
    padding: 5px;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
}

.alertError {
    background-color: red;
    color: black;
}

.alertSuccess {
    background-color: green;
    color: white;
}
</style>