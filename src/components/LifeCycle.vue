<template>
    <div>
        {{ nome }}
    </div>
</template>

<script>
export default {
    name: "LifeCycle",
    data() {
        return {
          nome: "Andre Matos"  
        }
    },
    
    beforeUpdate() {
        console.log("Antes Updated")
    },
    updated() {
        console.log("Updated")
    }

    /*beforeCreate() {
        console.log("Antes Create")
        console.log(this.nome)
        console.log(this.$el)
    },
    created() {
        console.log("Created")
        console.log(this.nome)
        console.log(this.$el)
    },
    beforeMount() {
        console.log("Antes Mounted")
        console.log(this.nome)
        console.log(this.$el)
    },
    mounted() {
        console.log("Mounted")
        console.log(this.nome)
        console.log(this.$el)
    }*/
}
</script>