<template>
  <div class="form row">
      <div class="col-sm-6">
      <h3>Form</h3>
      <div v-if="errors.length" class="errors">
        <li v-for="error in this.errors" v-bind:key="error">
          {{ error }}
        </li>
      </div>
      <div class="card-number-container">
        <input v-model.number='cardNumber' type="number" />
      </div>
      <div class="name-container">
        <input v-model='firstName' placeholder='First Name'/>
        <input v-model='lastName' placeholder='Last Name'/>
      </div>
      <button class="button-submit btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  /* props: {
    message: String,
  } */
  data: function(){
    return {
      errors: [],
    }
  },
  computed: {
    cardNumber: {
      get () {
          return this.$store.state.form.cardNumber
      },
      set (cardNumber) {
          this.$store.commit('updateCardNumber', cardNumber)
      }
    },
    firstName: {
      get () {
          return this.$store.state.form.firstName
      },
      set (firstName) {
          this.$store.commit('updateFirstName', firstName)
      }
    },
    lastName: {
      get () {
          return this.$store.state.form.lastName
      },
      set (lastName) {
          this.$store.commit('updateLastName', lastName)
      }
    }
  },
  methods: {
    updateCardNumber (e) {
      this.$store.commit('updateCardNumber', e.target.value)
    },
    updateFirstName (e) {
      this.$store.commit('updateFirstName', e.target.value)
    },
    updateLastName (e) {
      this.$store.commit('updateLastName', e.target.value)
    },
    submit () {
      this.errors = []
      if(typeof(this.cardNumber) !== "number" || this.cardNumber.toString().length !== 12) {
        this.errors.push('Card number must be a 12-digit number')
      }
      if(!this.errors.length) {
        this.$store.commit('submitTransaction')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
