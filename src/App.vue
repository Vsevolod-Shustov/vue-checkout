<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="main-container col-md-9 order-2">
          <router-view></router-view>
        </div>
        <div class="side-container col-md-3 order-1">
          <Side/>
        </div>
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
}
.container {
  margin-top:20px;
  margin-bottom:20px;
}
.main-container {
  background-color:#ddd;
  padding-top:15px;
  padding-bottom:15px;
}
.side-container {
  background-color:#eee;
}
</style>
