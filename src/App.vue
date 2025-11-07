<template>
  <div class="mainTudo">
    <two-way />
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