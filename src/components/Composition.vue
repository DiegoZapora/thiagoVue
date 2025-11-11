<template>
    <div>        
        <input type="text" name="" id="" v-model="user.nome"> 
        {{ fullName }}
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const user = ref({
    nome: "Andre",
    lastName: "Matos"
})

const fullName = computed(() => `${user.value.nome} ${user.value.lastName}`)

watch(fullName, () => {
    console.log("mudou")
})

</script>