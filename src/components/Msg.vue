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
    },
}
</script>

<style scoped>
.alert {
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding: 5px;
    border-radius: 6px;
    font-weight: bold;
    margin-bottom: 10px;
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