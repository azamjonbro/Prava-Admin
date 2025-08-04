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
            <th>Rasm</th>
            <th>Savollar</th>
            <th>Amallar</th>
            <!-- <th></th>
            <th></th> -->
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
            <td class="">
              <div class="btn_icons">
                <Button89 class="hide" @click="hideQuestion(question)" :question="question" title="hide" />
                <Button89 class="update" @click="hideModals(question)" title="update" />
                <Button89  class="delete" @click="deleteQuestion(question._id)" title="deleted" />

              </div>
            </td>
            <!-- <td>
            </td>
            <td>
            </td> -->
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
  /* border: 1px solid orange; */
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
  margin-bottom:2rem;
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

/* .loader::after {
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
} */
/* icons style */
.btn_icons{
    display: flex;
  display: flex;
  align-items: center;
  justify-content:start;
  gap: 20px; 

}
.hide{
  background-color:#246407;
  border-radius: 10px;
}
.update{
   background-color:#023017;
  border-radius: 10px; 
}
.delete{
   background-color:rgb(112, 6, 6);
  border-radius: 10px; 
}


/* //////// */

/* HTML: <div class="loader"></div> */
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: radial-gradient(circle closest-side,#000 94%,transparent) right/calc(200% - 1em) 100%;
  animation: l24 1.5s infinite alternate linear;
}
.loader::before {
  content: "Loading...";
  line-height: 1em;
  color: #0000;
  background: inherit;
  background-image: radial-gradient(circle closest-side,#fff 94%,#000);
  -webkit-background-clip:text;
          background-clip:text;
}

@keyframes l24{
  100%{background-position: left}
}
</style>
