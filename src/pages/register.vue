<template>
  <div>
   <Header/>
    <form @submit.prevent="onsubmitform" class="cardbgc">
      <h2>register Here</h2>
      <div>
        <div class="layout">
          <label>firstName</label>
          <input v-model="name" type="text" placeholder="your user name" required />
        </div>
        <div class="layout">
          <label>secondName</label>
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
        <div class="layout">
          <label>Re-Enter Password</label>
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
import Header from "@/components/header.vue";
export default {
    name: 'Register-Page',
    components:{
        Header
    },
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