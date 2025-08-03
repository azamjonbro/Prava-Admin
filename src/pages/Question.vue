<template>
  <div class="question-page">
    <div class="question_header">
      <h1 class="title">Question</h1>
      <select v-model="selectedLanguage">
        <option value="lotin">Lotin</option>
        <option value="krill">Krill</option>
        <option value="rus">Rus</option>
      </select>
    </div>

    <div class="question-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>img</th>
            <th>Questions</th>
            <th>Hide</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(question, index) in paginatedQuestions" :key="question.id">
            <td>{{ question?.id }}</td> 
            <td>
              <img :src="'https://prava.safonon.uz' + question?.imgUrl.slice(1)" alt="img" class="question_img" loading="lazy" width="100" height="100" />
            </td>
            <td>
              {{
                question?.questions?.[selectedLanguage].length > 60
                ? question?.questions?.[selectedLanguage].slice(0, 60) + "..."
                : question?.questions?.[selectedLanguage]
              }}
            </td>
            <td>
              <Button89 @click="hideQuestion(question)" :question="question" title="Hide" />
            </td>
            <td>
              <Button89 @click="hideModals(question)" title="Update" />
            </td>
            <td>
              <Button89 @click="deleteQuestion(question._id)" title="Delete" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="loading_container">
        <h1 v-if="loading" class="loader"></h1>
      </div>
    </div> 
    
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
    
    <OneProductModal
    v-if="hideModal"
    @close="hideModal = false"
    :question="selectedQuestion"
    :selectedLanguage="selectedLanguage"
    />
    <UpdateModal 
    v-if="updateModal"
    :question="selectedQuestion"
    @close="updateModal=false"
    />
    <Toastify :toastOptions="toastOptions" />
  </div>
</template>

<script>
import axios from "../utils/axios";
import Button89 from "../components/Button89.vue";
import OneProductModal from "../components/OneProductModal.vue";
import UpdateModal from "../components/UpdateModal.vue"

export default {
  name: "Question",
  components: {
    Button89,
    OneProductModal,
    UpdateModal,
  },
  data() {
    return {
      hideModal: false,
      updateModal:false,
      selectedLanguage: "lotin",
      questionsAll: [],
      selectedQuestion: null,
      currentPage: 1,
      itemsPerPage: 50,
      loading:false,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.questionsAll.length / this.itemsPerPage);
    },
    paginatedQuestions() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.questionsAll.slice(start, end);
    },
  },
  methods: {
    //Hide
    hideQuestion(question) {
      this.selectedQuestion = question;
      this.hideModal = true;
    },
    async getQuestionsData() {
      this.loading=true
      try {
        const res = await axios.get("/api/ticket/findall");
        this.questionsAll = res.data.tickets;
      } catch (err) {
        console.error("Savollarni olishda xatolik:", err);
      }finally{
        this.loading=false;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    //update
    hideModals(question){
      this.selectedQuestion=question
      this.updateModal=true
    },
    //delete
    async deleteQuestion(id){

      const confirmed=confirm("Haqiqatdan ham o'chirmoqchimisiz ?")
      if(!confirmed){
        console.log("O'chirish bekor qilindi");
        return
        
      }

      try {
        await api.delete(`/api/ticket/delete/${id}`);
        alert("Savol o'chirildi")
        console.log(id + " delete");
      } catch (error) {
        conform("O'chirishda xatolig")
        console.error("O‘chirishda xatolik:", error.response?.data || error.message);
      }
      finally{
        alert("O'chirishda xatolig 2")

      }
      
    }
    
  },
  mounted() {
    this.getQuestionsData();
  },
};
</script>

<style scoped>
.question-page {
  padding: 2rem;
  color: #e3e3e3;
  font-family: "SF Pro Display", sans-serif;
  overflow: hidden;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.question-table {
  overflow-x: auto;
  /* position: relative; */
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

.question_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

select {
  padding: 8px 16px;
  border: 2px solid #3498db;
  border-radius: 8px;
  background-color: #2f2f2f;
  color: #bbb;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

select:focus {
  outline: none;
  border-color: #2ecc71;
  box-shadow: 0 0 5px rgba(46, 204, 113, 0.6);
}

option {
  background-color: #fff;
  color: #333;
}

.question_img {
  width: 150px;
  height: 100px;
  border-radius: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
}

.pagination button {
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  background-color: #3498db;
  color: white;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #666;
  cursor: not-allowed;
}

/* //////////////////////////// */
.loading_container{
    width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.loader {
  font-family: monospace;
  font-size: 24px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(30deg, #ff6ec4, #7873f5, #4ade80, #facc15);
  -webkit-background-clip: text;
  white-space: nowrap;
  overflow: hidden;
}

.loader::after {
  content: "Loading...";
  animation: typing 1.1s steps(9, end) forwards, blink 0.7s step-end infinite;
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 9ch;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

</style>
