<template>
  <div class="main-box">
    <div class="box-form">
      <h1>Create user</h1>
      <input
        type="text" 
        placeholder="Name" 
        required
        v-model="model.name">

      <input
        type="text" 
        placeholder="Date of birth" 
        required
        v-mask="'##/##/####'"
        v-model="model.birthDate">

      <input
        type="text" 
        placeholder="Email" 
        required
        v-model="model.email">

      <input
        type="password" 
        placeholder="Password" 
        required
        v-model="model.password">

      <input
        type="password" 
        placeholder="Confirm password" 
        required
        v-model="model.confirmPassword">

      <button @click="submit">Sing in</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    submit() {
      console.log(this.model)
    }
  }
}
</script>

<style scoped>
.main-box {
  height:60vh;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-form {
  height: 40vh;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #303030;
  border-radius: 30px;  
  box-shadow: 10px 10px 10px #202020;
}

.box-form input {
  width: 70%;
  height: 5px;
  padding: 14px 12px;
  font-size: 15px;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  transition: border-color .2s ease, box-shadow .2s ease;
  background-color: #f5f5f5;
  color: black;
}

.box-form button {
  width: 75%;
  height: 37px;
  font-size: 15px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  background-color: green;
}

.box-form button:hover {
  transition: 0.7s;
  background-color: rgb(1, 172, 1);
}
</style>