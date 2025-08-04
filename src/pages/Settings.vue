<template>
    <div class="settings_page">
        <h1 class="title">Sozlamalar</h1>
        <div class="settengs_header">
            <div class="update_password">
                <h2>Parolni O'zgartirish</h2>
                <p class="password_title">Xavfsizlik uchun parolingizni muntazam o'zgartiring</p>
                <form @submit.prevent="updatePasswords" class="update_parol" action="">
                    <div class="input_group">
                        <label for="">Joriy password</label>
                        <div class="input">
                            <Icons class="pas_icons" name="password" />
                            <input v-model="password" :type="pas_hide_close ? 'text' : 'password'"
                                placeholder="Joriy parolni kiriting"></input>
                            <Icons v-if="pas_hide_close" @click="pas_hide_close = false" class="close_icons"
                                name="closehide" />
                            <Icons v-if="!pas_hide_close" @click="pas_hide_close = true" class="close_icons"
                                name="hide" />
                        </div>
                    </div>
                    <div class="input_group">
                        <label for="">Yangi parol</label>
                        <div class="input">
                            <Icons class="pas_icons" name="password" />
                            <input v-model="newPassword" :type="pas_hide_close_2 ? 'text' : 'password'"
                                placeholder="Yangi parolingzni kiriting"></input>
                            <Icons v-if="pas_hide_close_2" @click="pas_hide_close_2 = false" class="close_icons"
                                name="closehide" />
                            <Icons v-if="!pas_hide_close_2" @click="pas_hide_close_2 = true" class="close_icons"
                                name="hide" />
                        </div>
                    </div>
                    <div class="input_group">
                        <label for="">Yangi parolni tastiqlang</label>
                        <div class="input">
                            <Icons class="pas_icons" name="password" />
                            <input v-model="newPasswordIkki" :type="pas_hide_close_3 ? 'text' : 'password'"
                                placeholder="Yangi parolni qayta kiriting"></input>
                            <Icons v-if="pas_hide_close_3" @click="pas_hide_close_3 = false" class="close_icons"
                                name="closehide" />
                            <Icons v-if="!pas_hide_close_3" @click="pas_hide_close_3 = true" class="close_icons"
                                name="hide" />
                        </div>
                    </div>
                    <button>Parolni o'zgartirish</button>
                </form>
            </div>
            <div class="update_abouts">
                <h2>Foydalanuvchi ma'lumotlari</h2>
                <p>Sizning hisob ma'lumotlaringiz</p>
                <div class="update_about">
                    <div class="about_title">
                        <span>Foydalanuvchi nomi:</span>
                        <span><b>Admin</b></span>
                    </div>
                    <div class="about_title">
                        <span>Rol:</span>
                        <span><b>Administrator</b></span>
                    </div>
                    <div class="about_title">
                        <span>Oxirgi kirish:</span>
                        <span><b>2025-08-04</b></span>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <Toastify :toastOptions="toastOptions"/>
</template>
<script>
import Icons from '../components/Template/Icons.vue';
import Toastify from '../utils/Toastify.vue';

export default {
    name: "SettengsPage",
    components: {
        Icons,
        Toastify,
    },
    data() {
        return {
            passwordPattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$",
            pas_hide_close: true,
            pas_hide_close_2: true,
            pas_hide_close_3: true,
            password: '',
            newPassword: '',
            newPasswordIkki: '',
            toastOptions:{
                open:false,
                text:'',
            }
        }
    },
    methods: {
        updatePasswords() {
            console.log(this.password, this.newPassword, this.newPasswordIkki);

            if (this.password.length < 4 || this.newPassword.length < 4 || this.newPasswordIkki.length < 4) {
                this.toastOptions={
                    open:true,
                    text:"Parol uzunligi kamida 4 ta bo'lishi kerak",
                    type:"error"
                }
            }
            if(this.password!="admin"){
                this.toastOptions={
                    open:true,
                    text:"Joriy parol natog'ri",
                    type:"error"
                }
                this.password = '';
                this.newPassword = '';
                this.newPasswordIkki = '';

            }
            if ( this.newPassword!=this.newPasswordIkki ){
                this.toastOptions={
                    open:true,
                    text:"Yangi parol mos kelmadi",
                    type:"error"
                }
            this.newPassword = '';
            this.newPasswordIkki = '';
            }




            // this.password = '';
            // this.newPassword = '';
            // this.newPasswordIkki = '';
        }
    }
}
</script>
<style>
.settings_page {
    /* border: 1px solid red; */
    padding: 2rem;
    color: #e3e3e3;
    font-family: "SF Pro Display", sans-serif;
}

.title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.settengs_header {
    display: flex;
    gap: 30px;

}

.update_password,
.update_abouts {
    /* border: 1px solid red; */
    padding: 30px;
    border-radius: 20px;
    background-color: #1c1c1c;
    width: 47%;
    /* height: 500px; */
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.update_parol {
    display: flex;
    flex-direction: column;

}

.password_title {
    color: gray;
    font: 1em sans-serif;
}

.update_parol {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.input_group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input {
    display: flex;
    width: 100%;
    /* border: 1px solid red; */
    position: relative;
}

.input_group input {
    width: 100%;
    padding: 10px 40px;
    background-color: transparent;
    font-size: 17px;
    border: 1px solid gray;
    border-radius: 10px;
    color: gray;
}

/* pas_icons */
.pas_icons {
    position: absolute;
    top: 22%;
    left: 5px;
    /* transform: translate(-50%); */

}

.close_icons {
    position: absolute;
    top: 22%;
    right: 5px;
    cursor: pointer;
}

.update_parol button {
    padding: 15px;
    border-radius: 10px;
    border: none;
    font-size: 15px;
    color: gray;
    background-color: rgba(7, 156, 39, 0.603);
}

/* update_about */

.update_about {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.about_title {
    display: flex;
    border-bottom: 1px solid rgb(88, 86, 86);
    align-items: center;
    justify-content: space-between;
    line-height: 2.5rem;
}
</style>