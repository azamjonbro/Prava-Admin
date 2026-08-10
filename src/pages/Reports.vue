<template>
  <div class="reports-page">
    <div class="reports_header">
      <h1 class="title">Reports</h1>
      <select v-model="selectedLanguage">
        <option value="lotin">Lotin</option>
        <option value="krill">Krill</option>
        <option value="rus">Rus</option>
      </select>
    </div>

    <div class="reports-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Rasm</th>
            <th>Savol</th>
            <th>Mavzu</th>
            <th>Shikoyatlar</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>
              <img :src="apiUrl + ticket.imgUrl" alt="img" class="ticket_img" loading="lazy" width="100" height="100" />
            </td>
            <td>
              {{
                ticket.questions?.[selectedLanguage]?.length > 60
                  ? ticket.questions[selectedLanguage].slice(0, 60) + "..."
                  : ticket.questions?.[selectedLanguage]
              }}
            </td>
            <td>{{ ticket.topic }}</td>
            <td><span class="report-count">{{ ticket.reportCount }}</span></td>
            <td>
              <button class="dismiss-btn" @click="dismiss(ticket)" :disabled="dismissingId === ticket.id">
                {{ dismissingId === ticket.id ? "..." : "Bekor qilish" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="loading_container" v-if="loading">
        <h1 class="loader"></h1>
      </div>
      <p v-else-if="!tickets.length" class="empty">Hozircha shikoyat yo'q.</p>
    </div>
  </div>
</template>

<script>
import axios from "../utils/axios";

export default {
  name: "Reports",
  data() {
    return {
      tickets: [],
      loading: false,
      selectedLanguage: "lotin",
      dismissingId: null,
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },
  methods: {
    async loadReports() {
      this.loading = true;
      try {
        const res = await axios.get("/api/ticket/reported");
        this.tickets = res.data.tickets;
      } catch (err) {
        console.error("Shikoyatlarni olishda xatolik:", err);
      } finally {
        this.loading = false;
      }
    },
    async dismiss(ticket) {
      this.dismissingId = ticket.id;
      try {
        await axios.put(`/api/ticket/${ticket.id}/dismiss-report`);
        this.tickets = this.tickets.filter((t) => t.id !== ticket.id);
      } catch (err) {
        console.error("Shikoyatni bekor qilishda xatolik:", err);
      } finally {
        this.dismissingId = null;
      }
    },
  },
  mounted() {
    this.loadReports();
  },
};
</script>

<style scoped>
.reports-page {
  padding: 2rem;
  color: #e3e3e3;
  font-family: "SF Pro Display", sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: 500;
}

.reports_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

select {
  padding: 8px 16px;
  border: 2px solid #3498db;
  border-radius: 8px;
  background-color: #2f2f2f;
  color: #bbb;
  font-size: 16px;
  cursor: pointer;
}

option {
  background-color: #fff;
  color: #333;
}

.reports-table {
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

.ticket_img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

.report-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  padding: 4px 8px;
  border-radius: 8px;
  background: rgba(242, 85, 92, 0.15);
  color: #f2555c;
  font-weight: 700;
}

.dismiss-btn {
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
}

.dismiss-btn:disabled {
  background-color: #666;
  cursor: not-allowed;
}

.loading_container {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: radial-gradient(circle closest-side, #000 94%, transparent) right/calc(200% - 1em) 100%;
  animation: l24 1.5s infinite alternate linear;
}

.loader::before {
  content: "Loading...";
  line-height: 1em;
  color: #0000;
  background: inherit;
  background-image: radial-gradient(circle closest-side, #fff 94%, #000);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes l24 {
  100% {
    background-position: left;
  }
}

.empty {
  padding: 2rem;
  text-align: center;
  color: #888;
}
</style>
