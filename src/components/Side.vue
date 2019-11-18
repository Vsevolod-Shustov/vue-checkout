<template>
  <div class="side">
    <nav>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/form">Form</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/history">History</router-link>
        </li>
      </ul>
    </nav>
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
  .nav-link {
    background-color:#ccc;
  }
  .nav-link.router-link-exact-active {
    font-weight:bold;
    background-color:#bbb;
  }
</style>
