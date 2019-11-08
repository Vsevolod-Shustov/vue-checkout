<template>
  <div>
    <ul>
      <li v-for="item in historyItems" v-bind:key="item.id">
        {{ item.number }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    historyItems: {
      get () {
        return this.$store.state.history
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
