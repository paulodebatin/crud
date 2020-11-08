<template>
  <div id="app">

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  components: {
  
  }
  
}
</script>

<style>
#app {
  margin-top: 10px;
}
</style>
