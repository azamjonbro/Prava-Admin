<template>
    <div class="getUpdateModal" @click.self="closeUpdateModal">
        <div class="update_container">
            <h1 class="logo">Update</h1>
            <form @submit.prevent="updateQuestion">
                <div class="input-group">
                    <label for="">Savol:</label>
                    <input v-model="questionLotin" placeholder="Lotincha savol">
                    <label for="">Question</label>
                    <input v-model="questionKrill" placeholder="Кирилча савол">
                    <label for="">Вопрос</label>
                    <input v-model="questionRus" placeholder="Русский вопрос">
                </div>
                <div class="input-group-1" v-for="(answer, i) in answers" :key="i">
                    <input v-model="answer.lotin" placeholder="Lotincha javob">
                    <input v-model="answer.krill" placeholder="Кирилча жавоб">
                    <input v-model="answer.rus" placeholder="Русский ответ">
                </div>
                <button class="update_btn" >Update</button>
            </form>

            <div class="modal_close" @click="closeUpdateModal"><span>X</span></div>
        </div>
    </div>
    <Toastify :toastOptions="toastOptions" />
</template>

<script>
import axios from '../utils/axios';
import Toastify from '../utils/Toastify.vue';
export default {

    components: {
        Toastify
    },
    data() {
        console.log(this.question.answers);
        return {
            name: "UpdateModal ",
            passwordPattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$",
            questionLotin: '',
            questionKrill: '',
            questionRus: '',
            answers: [
                { lotin: '', krill: '', rus: '' },
                { lotin: '', krill: '', rus: '' },
                { lotin: '', krill: '', rus: '' },
                { lotin: '', krill: '', rus: '' }
            ],
            toastOptions: {
                open: false,
                text: "",
            },
 

        }
    },
    props: {
          question: {
        type: Object,
        required: true
    }
    },
    methods: {
        closeUpdateModal() {
            this.$emit('close')

        },
        async updateQuestion(e) {
            // console.log("secces");

            const isQuestionFilled = this.questionLotin.trim() && this.questionKrill.trim() && this.questionRus.trim();
            const areAnswersFilled = this.answers.every(ans =>
                ans.lotin.trim() && ans.krill.trim() && ans.rus.trim()
            );

            if (!isQuestionFilled || !areAnswersFilled) {
                console.log("salom");
                if (this.toastOptions.open) return;
                this.toastOptions = {
                    open: true,
                    text: "Hammasi to‘ldirilishi shart",
                    type: "error",
                };
                return;
            }

            else {
                console.log("alik");

                // this.toastOptions = {
                //     open: true,
                //     text: "Ma’lumotlar to‘ldirildi!",
                //     type: "success",

                // };

                const payload = {
                    questions: {
                        lotin: this.questionLotin,
                        krill: this.questionKrill,
                        rus: this.questionRus
                    },
                    answers: this.answers.map((answer, idx) => ({
                        lotin: answer.lotin,
                        krill: answer.krill,
                        rus: answer.rus,
                        id: idx + 1
                    }))
                }
                console.log(this.question._id +"115");
                
                try {

                    const setUpdate = await axios.put(`/api/ticket/update/${this.question._id}`, payload)
                    console.log(setUpdate);
                    
                    this.toastOptions = {
                        open: true,
                        text: "Ma’lumotlar muvaffaqiyatli yangilandi!",
                        type: "success",
                    }
                    this.$emit('close')
                } catch (error) {
                    console.error("Xatolik:", error);
                    this.toastOptions = {
                        open: true,
                        text: "Xatolik yuz berdi! 128",
                        type: "error",
                    };

                }
            }
        },
        //closemodalanimtion
        openModal() {
            this.showModal = true;
        },
        hideModal() {
            this.isLeaving = true;
            setTimeout(() => {
                this.showModal = false;
                this.isLeaving = false;
            }, 300); // CSS animatsiya davomiyligiga mos
        },
    },
    created() {
        if (this.question) {
            this.questionLotin = this.question.questions?.lotin || '';
            this.questionKrill = this.question.questions?.krill || '';
            this.questionRus = this.question.questions?.rus || '';
            this.answers = this.question.answers || this.answers;
        }
    }
}
</script>

<style scoped>
.getUpdateModal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease-out forwards;
}

.update_container {
    transform: scale(0.5);
    opacity: 0;
    animation: scaleUp 0.4s ease-out forwards;
}


@keyframes fadeIn {
    from {
        background-color: rgba(0, 0, 0, 0);
    }

    to {
        background-color: rgba(0, 0, 0, 0.5);
    }
}


@keyframes scaleUp {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.update_container {
    background: white;
    border-radius: 12px;
    padding: 20px;
    width: 500px;
    max-width: 90%;
}



.modal_close {
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

.logo {
    font-size: 2.2rem;
    color: #e3e3e3;
    letter-spacing: 8px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    margin-top: 10px;
}

.update_container {
    position: relative;
    border-radius: 10px;
    background-color: #2a2a2a;
    width: 900px;
    padding: 20px;
    /* padding qo‘shildi */
    box-sizing: border-box;
}

.input-group {
    margin-bottom: 20px;
    width: 100%;
    /* display: flex; */
}

.input-group-1 {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    gap: 10px;
}

.input-group-1 input {
    width: 33%;
}

.input-group label {
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #ccc;
    font-size: 0.95rem;
}

.input-group input,
.input-group-1 input {
    width: 100%;
    padding: 12px 16px;
    background-color: #1e1e1e;
    border: 1px solid #444;
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    outline: none;
    box-sizing: border-box;
    /* 🔧 muhim! */
    transition: border-color 0.3s ease, background-color 0.3s ease;
}

.input-group input:focus {
    border-color: #e3e3e3;
    background-color: #252525;
}

.update_btn {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(145deg, #3a3a3a, #1c1c1c);
    color: #e3e3e3;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}

.update_btn:hover {
    background: linear-gradient(145deg, #4c4c4c, #2a2a2a);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}




/* .input-group label {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  pointer-events: none;
  transition: 0.3s ease;
} */
/* .input-group input:focus+label,
.input-group input:not(:placeholder-shown)+label {
  top: -10px;
  left: 10px;
  font-size: 0.8rem;
  color: #e3e3e3;
  background: #1c1c1c;
  padding: 0 4px;
} */
</style>