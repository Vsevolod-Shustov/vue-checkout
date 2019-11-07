<template>
  <div>
    Form<br>
    {{cardNumber}}<br>
    <input v-model='cardNumber' />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  /* props: {
    message: String,
  } */
  computed: {
      cardNumber: {
          get () {
              return this.$store.state.form.cardNumber
          },
          set (cardNumber) {
              this.$store.commit('updateCardNumber', cardNumber)
          }
      }
  },
  methods: {
      updateCardNumber (e) {
        this.$store.commit('updateCardNumber', e.target.value)
      },
      submit () {
        this.$store.commit('submitTransaction')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
