<template>
  <div class="side">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link" to="/form">Form</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/history">History</router-link>
      </li>
    </ul>
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

</style>
