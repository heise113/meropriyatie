<template>
    <div class="log-in-pass-wrapper">
        <span class="log-in-pass-wrapper__text">
            Введите пароль
        </span>
        <input type="password" v-model="input_pass" class="log-in-pass-wrapper__input">
        <div v-if="validate_pass" class="log-in-pass-wrapper__validate">Невырный пароль</div>
        <div v-if="validate_empty" class="log-in-pass-wrapper__validate">Введите пароль</div>
        <button @click="goChat" class="log-in-pass-wrapper__button">
            Войти
        </button>
        <!-- <button v-if="route.path == '/screen'" @click="goScreen" class="log-in-pass-wrapper__button">
            Войти
        </button> -->
        <div @click="goHome" class="log-in-pass-wrapper__home">
            На главную
        </div>
        <div v-if="route.path == '/user'" @click="goBackUser" class="log-in-pass-wrapper__create">
            Назад
        </div>
        <div v-if="route.path == '/screen'" @click="goBackScreen" class="log-in-pass-wrapper__create">
            Назад
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useRoute } from 'vue-router';
export default {
    data() {
        return {
            route: useRoute(),
            validate_pass: false,
            validate_empty: false,
            input_pass: ''
        }
    },
    methods: {
        async goChat() {
            if (this.input_pass !== '') {
                this.validate_empty = false
                await axios
                    .post("http://80.249.147.33/api/join/room", {
                        code: this.$store.state.user_login,
                        password: this.input_pass
                    })
                    .then((response) => {
                        if (response.data.data === 'wrongPassword'){
                            this.validate_pass = true
                            setTimeout(() => {
                                this.validate_pass = false
                            }, 3000)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                if (!this.validate_pass){
                    if (this.$route.path == '/screen'){
                        this.$router.push('/screen/room/')
                        // console.log('+')
                    }
                    else if(this.$route.path == '/user'){
                        this.$router.push('/user/room/')
                        // console.log('-') 
                    }
                }
            }
            else {
                this.validate_pass = false
                this.validate_empty = true
                setTimeout(() => {
                    this.validate_empty = false
                }, 3000)
            }
        },
        goScreen() {
            if (this.input_pass !== '') {
                this.validate_empty = false
                this.validate_pass = true
                setTimeout(() => {
                    this.$router.push('/screen/room')
                }, 3000)
            }
            else {
                this.validate_pass = false
                this.validate_empty = true
                setTimeout(() => {
                    this.validate_empty = false
                }, 3000)
            }
        },
        goHome() {
            this.$router.push('/')
        },
        goBackUser() {
            this.$emit('changeActive', 'login')
        },
        goBackScreen() {
            this.$emit('changeActive', 'login')
        }
    }
}
</script>

<style scoped lang="scss">
.log-in-pass-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px;
    background: #CACCDB;
    border: 5px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 260px;

    &__text {
        margin-bottom: 25px;
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        text-align: center;
        color: #7764AC;
        //color: gray;
    }

    &__input {
        margin-bottom: 25px;
        background: #EEEDED;
        border-radius: 5px;
        padding: 5px;
    }

    &__validate {
        margin-top: -20px;
        text-align: center;
        color: red;
        margin-bottom: 10px;
    }

    &__validate-error {
        color: red;
        margin-bottom: 10px;
    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 40px;
        background: #7764AC;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        color: #EAEAEA;
        cursor: pointer;
        user-select: none;

        &:active {
            opacity: 0.8;
        }
    }

    &__create {
        margin-top: 15px;
        color: #7764AC;
        cursor: pointer;
    }

    &__home {
        position: absolute;
        top: 10px;
        left: 10px;
        cursor: pointer;
        color: white;
        transition-duration: 0.3s;

        &:hover {
            transition-duration: 0.3s;
            transform: scale(1.1);
        }
    }
}
</style>