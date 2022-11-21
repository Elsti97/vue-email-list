var app = new Vue({
  el: '#root',
  data: {
      arrayEmail: [],
      emails: false,
  },
  mounted() {

  },
  beforeUpdate() {

  },
  methods: {
      genera() {
          for (let i = 0; i < 10; i++) {
          this.emails = true  
          axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((response) => {
          console.log(response.data.response, this)
          let emailsRandom = response.data.response
          this.arrayEmail.push(emailsRandom);
          })
          }
      }
  }
})