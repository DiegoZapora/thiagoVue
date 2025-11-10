<template>
  <div class="mainTudo">
    <nav>
      <router-link to="/">Home</router-link> <span></span>
      <router-link to="/computada">Computada</router-link> <span></span>
      <router-link to="/servicos">Serviços</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import TwoWay from './components/TwoWay.vue';



export default {
  components: {
    TwoWay
  }
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