<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    value: String,
  },
};
</script>

<style scoped>
.card {
  background: #1c1c1c;
  border-radius: 12px;
  padding: 1.5rem;
  color: #e3e3e3;
  box-shadow: 0 5px 15px rgba(0,0,0,0.4);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
