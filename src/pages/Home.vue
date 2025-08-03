<template>
  <div>
    
    <div>
      <div class="dashboard">
        <h1>Dashboard</h1>
        <div class="cards">
          <Card title="Total Clients" value="1,204" />
          <Card title="Revenue" value="$98,450" />
          <Card title="Pending Tasks" value="18" />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Card from "../components/Card.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
  name: "Home",
  components: { DefaultLayout, Card },
};
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  color: #e3e3e3;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
</style>
