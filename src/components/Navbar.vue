<template>
  <header class="navbar">
    <div class="navbar-left">
      <h1 class="title">Dashboard</h1>
    </div>
    <div class="navbar-right">
      <div class="icon notification">
        <i class="fas fa-bell"></i>
      </div>
      <div class="user">
        <!-- <img src="https://i.pravatar.cc/40?img=3" alt="User Avatar" /> -->

        <router-link to="/login">
          <img src="https://i.pravatar.cc/40?img=3" alt="User profile avatar" />
        </router-link>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1c1c1c;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: #e3e3e3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.title {
  font-size: 1.4rem;
  font-weight: 500;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.icon {
  font-size: 1.2rem;
  color: #aaa;
  cursor: pointer;
  transition: color 0.3s ease;
}

.icon:hover {
  color: #fff;
}

.user img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid #3a3a3a;
  cursor: pointer;
}
</style>
