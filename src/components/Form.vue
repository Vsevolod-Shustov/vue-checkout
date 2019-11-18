<template>
  <form class="cardNumberForm col-sm-6">
    <div v-if="errors.length" class="errors">
      <li v-for="error in this.errors" v-bind:key="error">
        {{ error }}
      </li>
    </div>
    <div class="form-group">
      <label for="cardNumber">Card Number</label>
      <input v-model.number='cardNumber' type="number" class="form-control" id="cardNumber"/>  
    </div>
    
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input v-model='firstName' placeholder='First Name' id="firstName" class="form-control"/>
    </div>
      
    <div class="form-group">  
      <label for="lastName">Last Name</label>
      <input v-model='lastName' placeholder='Last Name' id="lastName" class="form-control"/>
    </div>
    
    <button type="submit" class="button-submit btn btn-primary" @click.prevent="submit">Submit</button>
  </form>
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
  .errors {
    margin-bottom:16px;
  }
</style>
