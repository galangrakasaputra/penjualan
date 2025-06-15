<template>
    <div class="register-container">
      <div class="register-box">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label>Username</label>
            <input type="text" v-model="nama" required />
          </div>
  
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" required />
          </div>

          <div class="form-group">
            <label>Posisi</label>
            <br>
            <select v-model="posisi" required>
                <option value="admin">Admin</option>
                <option value="staf">Staf</option>
            </select>
          </div>
  
          <button type="submit">Register</button>
          <router-link to="/register" class="btn-login">Login</router-link>
  
          <p v-if="error" class="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async register() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method : 'POST',
                headers: {
                    'Content-Type': 'apllication/json',
                    'Accept': 'application.json'
                },
                body: JSON.stringify({
                    nama: this.nama,
                    password: this.password,
                    posisi: this.posisi
                })
            });
            const data = await response.json();

            if (!response.ok) {
            if (response.status === 422) {
                this.errors = Object.values(data.errors).flat();
            } else {
                this.errors = ['Terjadi kesalahan: ' + data.message];
            }
            } else {
            alert('Registrasi berhasil!');
            this.$router.push('/login');
            }
        } catch (error) {
            this.error = ['Gagal']
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
  }
  .register-box {
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
    width: 40%;
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
  .btn-login {
    display: inline-block;
    padding: 8px 16px;
    margin-left: 31%;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
  }

  .btn-login:hover {
    background-color: #0056b3;
  }
  </style>
  