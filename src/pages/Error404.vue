<template>
  <div class="error-page">
    <h1>404</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/dashboard" class="btn">Go to Dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle at center, #0f0f0f, #000);
  color: #e3e3e3;
  text-align: center;
  font-family: "SF Pro Display", sans-serif;
}

.error-page h1 {
  font-size: 8rem;
  font-weight: 700;
  color: #ff4c4c;
  margin-bottom: 1rem;
}

.error-page p {
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 2rem;
}

.btn {
  padding: 12px 24px;
  background: linear-gradient(145deg, #3a3a3a, #1c1c1c);
  color: #e3e3e3;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn:hover {
  background: linear-gradient(145deg, #4c4c4c, #2a2a2a);
}
</style>
