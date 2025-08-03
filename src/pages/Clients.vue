<template>
  <div class="clients-page">
    <h1 class="title">Clients</h1>
    <div class="clients-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(client, index) in clients" :key="client.id">
            <td>{{ index + 1 }}</td>
            <td>{{ client.name }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.company }}</td>
            <td>
              <span
                :class="['status', client.status.toLowerCase()]"
              >{{ client.status }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clients",
  data() {
    return {
      clients: [
        {
          id: 1,
          name: "Elon Musk",
          email: "elon@tesla.com",
          company: "Tesla",
          status: "Active",
        },
        {
          id: 2,
          name: "Mark Zuckerberg",
          email: "mark@meta.com",
          company: "Meta",
          status: "Inactive",
        },
        {
          id: 3,
          name: "Sundar Pichai",
          email: "sundar@google.com",
          company: "Google",
          status: "Active",
        },
        {
          id: 4,
          name: "Jeff Bezos",
          email: "jeff@amazon.com",
          company: "Amazon",
          status: "Pending",
        },
      ],
    };
  },
};
</script>

<style scoped>
.clients-page {
  padding: 2rem;
  color: #e3e3e3;
  font-family: "SF Pro Display", sans-serif;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.clients-table {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #1c1c1c;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

th,
td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

th {
  background: #2a2a2a;
  color: #bbb;
  font-weight: 600;
}

tr:hover {
  background: #2f2f2f;
}

.status {
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.status.active {
  background: #28a745;
  color: #fff;
}

.status.inactive {
  background: #dc3545;
  color: #fff;
}

.status.pending {
  background: #ffc107;
  color: #000;
}
</style>
