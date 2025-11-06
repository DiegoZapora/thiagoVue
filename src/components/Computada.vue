<template>
    <div>
        {{ finalName }}
    </div>
</template>

<script>
export default {
    name: "Computada",
    data() {
        return {
            user: {
                nome: "Andre",
                lastName: "Matos",
            }
        }
    },
    computed: {
        finalName() {
            return `${this.user.nome} ${this.user.lastName}`
        }
    }
}
</script>
