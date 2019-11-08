<template>
  <div class="side">
    <router-link to="/">Form</router-link>
    <router-link to="/history">History</router-link>
  </div>
</template>

<script>
export default {
  name: 'Side',
  props: {
    
  }
}
</script>

<style scoped>
.side {
  background-color:#ccc;
  display:flex;
  flex-direction:column;
  width:200px;
  padding:0.25rem;
  height:100%;
}
.side a {
  padding:0.25rem 0.5rem;
}
.side a,
.side a:visited {
  color:inherit;
  text-decoration:none;
}
/*.side a:not(:last-of-type) {
  margin-bottom:0.25rem;
}*/
.side a:nth-of-type(2n) {
  background-color:#bbb;
}
.side a:nth-of-type(2n+1) {
  background-color:#aaa;
}
</style>
