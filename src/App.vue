<template>
  <div class="mainTudo">
    <life-cycle texto-btn="Enviar" @update="nomeBtn" />
  </div>
</template>

<script setup>
import LifeCycle from './components/LifeCycle.vue';

const nomeBtn = () => {
  alert("fui clicado")
}

</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box; 
}

.mainTudo {
  width: 100vw;
  height: 100vh;
}

</style>