<template>
  <div class="main-div">
    <div class="image-div">
      <img 
        src="../../../imgs/login.svg" 
        alt="woman sitting at the table with a computer" />
    </div>
    <div class="login">
      <div class="box-login">
        <div class="box-login-inputs">
          <h2>LOGIN</h2>
          <input id="login" type="text" placeholder="Login" required>
          <input id="password" type="password" placeholder="Password" required>
          <button>Sing in</button>
          <label for="">New to Chat Box? 
            <router-link to="/create-user">Create an account</router-link>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main-div {
  display: flex;
  height: 85vh;
  width: 80vw;
}

.image-div {
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-div img {
  max-width: 80%; 
  max-height: 80%;
}

.login {
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-login-inputs {
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

.box-login-inputs input {
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

.box-login-inputs button {
  width: 75%;
  height: 37px;
  font-size: 15px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  background-color: green;
}

.box-login-inputs button:hover {
  transition: 0.7s;
  background-color: rgb(1, 172, 1);
}
</style>
