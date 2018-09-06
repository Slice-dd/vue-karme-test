<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Async></Async>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Async from './components/Async'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Async
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
