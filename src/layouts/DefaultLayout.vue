<template>
  <div class="layout">
    <Sidebar />
    <div class="main">
      <Navbar />
      <div class="content">
         <router-view></router-view>
      </div>
    </div>
  </div>


</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "DefaultLayout",
  components: { Sidebar, Navbar }
}


</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  background: #0f0f0f;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}
</style>
