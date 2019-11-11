<template>
  <div class="form">
    <h3>Form</h3>
    <div class="card-number-container">
      <input v-model='cardNumber' />
      <p class="card-number-display">{{cardNumber}}</p>
    </div>
    <div class="name-container">
      <label> First Name <br>
        <input v-model='firstName' />
      </label>
      <label> Last Name <br>
        <input v-model='lastName' />
      </label>
    </div>
    <button class="button-submit" @click="submit">Submit</button>
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
      this.$store.commit('submitTransaction')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form {
    display:flex;
    flex-direction:column;
  }
  .form>* {
    margin:0;
    margin-bottom:0.5rem;
  }
  
  .button-submit {
    padding:0.25rem;
    color:white;
    background-color:#2196F3;
    border:none;
    cursor:pointer;
  }
  
  @media screen and (min-width:800px) {
    .form {
      max-width:50%;
    }
    .card-number-container {
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    .card-number-container input {
      width:49%;
    }
    
    .name-container {
      display:flex;
      justify-content:space-between;
    }
    .name-container input {
      width:98%;
    }
  }
</style>
