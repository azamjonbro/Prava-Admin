<template>
  <div class="sidebar">
    <div class="logo">TESLA CRM</div>
    <nav>
      <nav>
  <router-link to="/dashboard" class="link" active-class="active">Home</router-link>
  <router-link to="/clients" class="link" active-class="active">Clients</router-link>
  <router-link to="/question" class="link" active-class="active">Question</router-link>
  <router-link to="/reports" class="link" active-class="active">Reports</router-link>
  <router-link to="/settings" class="link" active-class="active">Settings</router-link>
</nav>

    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 240px;
  background: #1c1c1c;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 2px 0 10px rgba(0,0,0,0.5);
}
.logo {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
}
.link {
  display: block;
  padding: 1rem;
  color: #aaa;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: background 0.3s, color 0.3s;
}
.link:hover {
  background: #333;
  color: #fff;
}
.active {
  background: linear-gradient(145deg, #3a3a3a, #1c1c1c);
  color: #fff;
}
</style>
