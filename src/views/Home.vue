<template>
    <h1>{{ userStore.mensagem.nomeUser }}</h1>
    <h1>{{ userStore.mensagem.email }}</h1>
</template>

<script setup>
import { useUser } from '../store/userStore';
const userStore = useUser()

</script>