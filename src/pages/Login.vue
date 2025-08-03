<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="logo">TESLA</h1>
      <h2 class="welcome">Sign in to your account</h2>
      <form @submit.prevent="login" autocomplete="off">
        <div class="input-group">
          <input type="email" required v-model="formData.email" :class="errors?.email ? 'error-input' : 'default-input'"
            :focus="errors?.email" placeholder=" " autocomplete="off" @input="loginError = false" />
          <label>Username</label>
          <!-- <p v-if="errors.email" class="error-msg"></p> -->
        </div>
        <div class="input-group">
          <input type="password" required v-model="formData.password"
            :class="errors?.password ? 'error-input' : 'default-input'" :focus="errors?.password" placeholder=" "
            autocomplete="new-password" @input="loginError = false" />

          <label>Password</label>
        </div>
        <p v-if="loginError" class="login_error">Email yoki parol xato!</p>
        <button type="submit" class="login-btn" >Login</button>
      </form>
      <p class="footer">Forgot password? <a href="#">Recover it</a></p>
    </div>
  </div>
  <Toastify :toastOptions="toastOptions"/>
</template>

<script>
import axios from '../utils/axios';
import Toastify from '../utils/Toastify.vue';
export default {
  name: "Login",
  components:{
    Toastify
  },
  data() {
    return {
       toastOptions: {
      open: false,
      text: "",
      limit:1,
    },
      formData: {
        email: "",
        password: "",
      },
      passwordPattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$",
      errors: {
        email: "",
        password: "",
      },
      loginError: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/auth/login', this.formData)
        console.log(response);
        
        const token = response?.data?.token
        if (token) {
          localStorage.setItem("token", token)
          this.toastOptions={
            open:true,
            text: "Siz muvaffaqqiyatli kirdingiz",
            type:"success",
          }
          setTimeout(()=>{
            this.$router.push("/dashboard")
          },3000)
        }
        else {
          console.log("nimadir hato");
          this.toastOptions={
            open:true,
            text: "Nimadir hato",
            type:"error",
          }
        }
      } catch (error) {
        this.loginError = true;
        this.toastOptions={
            open:true,
            text: "Nimadir hato",
            type:"error",
          }
        this.formData.email = "";
        this.formData.password = "";
      }

    }
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #0f0f0f, #000000);
  font-family: Arial, Helvetica, sans-serif;
}

.login-card {
  background: rgba(30, 30, 30, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 40px 30px;
  width: 360px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  text-align: center;
  animation: fadeIn 1s ease-out;
}

.logo {
  font-size: 2.2rem;
  color: #e3e3e3;
  letter-spacing: 8px;
  font-weight: 700;
  margin-bottom: 20px;
}

.welcome {
  color: #999;
  font-size: 1.1rem;
  margin-bottom: 30px;
  font-weight: 400;
}

/* 📥 Inputs with Tesla UI floating labels */
.input-group {
  position: relative;
  margin-bottom: 25px;
}

.input-group input {
  width: 100%;
  padding: 14px 12px;
  background: #1c1c1c;
  border: 1px solid #333;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #e3e3e3;
  background: #222;
}

.input-group label {
  position: absolute;
  left: 14px;
  top: 40%;
  transform: translateY(-50%);
  color: #777;
  pointer-events: none;
  transition: 0.3s ease;
}



.input-group input:focus+label,
.input-group input:not(:placeholder-shown)+label {
  top: -15px;
  left: 10px;
  font-size: 0.8rem;
  color: #e3e3e3;
  background: #1c1c1c;
  padding: 0 4px;
}

/* 🚀 Tesla Styled Button */
.login-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(145deg, #3a3a3a, #1c1c1c);
  color: #e3e3e3;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}

.login-btn:hover {
  background: linear-gradient(145deg, #4c4c4c, #2a2a2a);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

/* 📌 Footer */
.footer {
  margin-top: 20px;
  color: #555;
  font-size: 0.9rem;
}

.footer a {
  color: #e3e3e3;
  text-decoration: underline;
  transition: 0.3s;
}

.footer a:hover {
  color: #fff;
}

/* ✨ Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


<style scoped>
/* 🌌 Dark Minimal Tesla UI */
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #0f0f0f, #000000);
  font-family: Arial, Helvetica, sans-serif;
}

.login-card {
  background: rgba(30, 30, 30, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 40px 30px;
  width: 360px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  text-align: center;
  animation: fadeIn 1s ease-out;
}

.logo {
  font-size: 2.2rem;
  color: #e3e3e3;
  letter-spacing: 8px;
  font-weight: 700;
  margin-bottom: 20px;
}

.welcome {
  color: #999;
  font-size: 1.1rem;
  margin-bottom: 30px;
  font-weight: 400;
}

/* 📥 Inputs with Tesla UI floating labels */
.input-group {
  position: relative;
  margin-bottom: 25px;
}

.input-group input {
  width: 100%;
  padding: 14px 12px;
  background: #1c1c1c;
  border: 1px solid #333;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #e3e3e3;
  background: #222;
}

.input-group label {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  pointer-events: none;
  transition: 0.3s ease;
}


.input-group input:focus+label,
.input-group input:not(:placeholder-shown)+label {
  top: -10px;
  left: 10px;
  font-size: 0.8rem;
  color: #e3e3e3;
  background: #1c1c1c;
  padding: 0 4px;
}

/* 🚀 Tesla Styled Button */
.login-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(145deg, #3a3a3a, #1c1c1c);
  color: #e3e3e3;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}

.login-btn:hover {
  background: linear-gradient(145deg, #4c4c4c, #2a2a2a);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

/* 📌 Footer */
.footer {
  margin-top: 20px;
  color: #555;
  font-size: 0.9rem;
}

.footer a {
  color: #e3e3e3;
  text-decoration: underline;
  transition: 0.3s;
}

.footer a:hover {
  color: #fff;
}

/* ✨ Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login_error {
  /* border: 1px solid red; */
  text-align: start;
  color: red;
  margin: 15px;

}
</style>
