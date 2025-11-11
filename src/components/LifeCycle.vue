<template>
    <div>
        <button @click="$emit('update')">{{ textoBtn }}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    textoBtn: {
        type: String
    }
})

const emit = defineEmits(['update'])

</script>