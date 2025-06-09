<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="email" required />
          </div>
  
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" required />
          </div>
  
          <button type="submit">Login</button>
  
          <p v-if="error" class="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      handleLogin() {
        // Simulasi login (nanti bisa diganti axios ke Laravel)
        if (this.email === 'admin@example.com' && this.password === 'password') {
          this.$router.push('/');
        } else {
          this.error = 'Email atau password salah.';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
  }
  .login-box {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 300px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    width: 100%;
    padding: 10px;
    background: #2c3e50;
    color: white;
    border: none;
    border-radius: 4px;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  