<template>
  <div id="app">
    <div class="container">
      <div class="main-container">
        <router-view></router-view>
      </div>
      <div class="side-container">
        <Side/>
      </div>
    </div>
  </div>
</template>

<script>
import Side from './components/Side.vue'

export default {
  name: 'app',
  components: {
    Side
  }
}
</script>

<style>
* {
  box-sizing:border-box;
  margin-block-start:0;
  margin-block-end:0;
}
html {
  
}
#app {
  font-family: Verdana, sans-serif;
  font-size:16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:900px;
  max-width:100%;
  margin:20px auto;
}
.container {
  border:1px solid black;
  display:flex;
  flex-direction:row;
}
.main-container {
  background-color:#eee;
  flex:auto;
  order:1;
  padding:0.5rem 1rem;
}
</style>
