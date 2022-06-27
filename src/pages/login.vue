<template>
<div>
  <Header/>
    <form @submit.prevent="onsubmitform" class="cardbgc">
      <h2>Login Here</h2>
      <div>
        <div class="layout">
          <label>userName</label>
          <input v-model="name" type="text" placeholder="your user name" required />
        </div>
        <div class="layout">
          <label>Email</label>
          <input v-model="email" type="text" placeholder="your user email" required />
        </div>
        <div class="layout">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="enter your password here" required />
        </div>
      </div>
      <div>
        <button type="submit" class="btn3">Login</button>
      </div>
    </form>
</div>
</template>

<script>
import Header from '@/components/header.vue'
//  created our states
export default {
   name: 'Login-Page',
    data() {
        return {
            name: "",
            email: "",
            password: "",
            // correct values
            correctName: "ntungwe grace",
            correctemail: "ntongwe@gmail.com",
            correctpassword: "12345"
        };
    },
    // added a method the is an action to take place after the form is submited by a user
    methods: {
        onsubmitform() {
            if (this.name === this.correctName && this.email === this.correctemail && this.password === this.correctpassword) {
                alert("form successfully submited");
            }
            else {
                alert("error found");
            }
        }
    },
    components: { Header }
}
</script>

<style>
* {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
.cardbgc {
  box-shadow: 2px 3px 2px 3px rgb(29, 208, 231);
  background-color: rgb(42, 97, 97);
  box-shadow: 2px 3px 2px 3px rgb(145, 145, 147);
  padding: 2em;
  width: 500px;
  min-height: 50vh;
  border-radius: 3px;
  margin: 50px;
  margin: auto;
  margin-top: 8em;
  margin-bottom: 3em;
  color: white;
}

.layout input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid black;
  margin: 0.6em;
  border-radius: 5px;
}

label {
  font-size: 15px;
}

h2 {
  text-align: center;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 500;
}

.btn3 {
  border: none;
  text-align: center;
  background-color: rgb(202, 202, 215);
  padding: 0.7em;
  margin: 0.4em;
  margin-bottom: 2em;
  border-radius: 7px;
  /* color: #fff;  */
  margin-left: 10em;
}
</style>