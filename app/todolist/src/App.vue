<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v_todo></v_todo>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import v_todo from './components/todolist/v_todo'
export default {
  name: 'app',
  components: {
    v_todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
