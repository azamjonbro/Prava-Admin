<template>
    <div class="oneProductModal" @click.self="removeModal">
        <div class="modal-content">
            <div class="modal-img">
                <img :src="'https://prava.safonon.uz' + question.imgUrl" alt="img" class="question_img" />
            </div>
            <div class="modal-text">
                <h2 class="question">Savol: {{ question.questions[selectedLanguage] }}</h2>

                <div class="variantlar" v-for="(savol,index) in question.answers " :key="index">
                  <h3>{{ index+1}}:  {{savol[selectedLanguage] }}</h3>
                </div> 

                <p class="questionAnswer">To‘g‘ri javob: {{ correctAnswer[selectedLanguage] }} </p>
            </div>
            <div class="question_close" @click="removeModal"><span>X</span></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "OneProductModal",
  props: {
    question: {
      type: Object,
      required: true
    },
    imageUrl: String, // tashqaridan rasm url oladi
    selectedLanguage: {
      type: String,
      default: "lotin" // yoki "krill", "rus"
    },
    selectedLanguage: {
    type: String,
    required: true
  }
  },
  computed: {
    correctAnswer() {
      const index = this.question.correct_answer - 1;
      return this.question.answers[index];
      console.log(question);
      
    }
  },
  methods: {
    removeModal() {
      this.$emit("close");
      console.log(this.question);
    }
  },
  mounted() {
    console.log(this.question);
}
}
</script>

<style scoped>
.oneProductModal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    /* border: 1px solid red; */
}

.modal-content {
    background-color: #2a2a2a;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 30px;
    max-width: 1000px;
    width: 100%;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    position: relative;
}

.modal-img img {
    width: 400px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
}

.modal-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.question_close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    cursor: pointer;

}

@media (max-width: 768px) {
    .modal-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .modal-img img {
        width: 100%;
    }
}
</style>