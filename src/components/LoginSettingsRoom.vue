<template>
    <div class="wrapper-login">
        <div class="wrapper-login__window">
            <div class="wrapper-login__window__title">
                Вход в комнату
            </div>
            <div class="wrapper-login__window__text">
                Введите id комнаты
            </div>
            <input v-model="input_name" type="text" class="wrapper-login__window__input">
            <div class="wrapper-login__window__text">
                Введите пароль администратора
            </div>
            <input v-model="input_pass" type="text" class="wrapper-login__window__input">
            <button class="wrapper-login__window__button" @click="login">
                Войти
            </button>
            <div class="wrapper-login__window__create" @click="$emit('changeActive', 'create_room')">
                Создать
            </div>
            <div class="wrapper-login__window__home" @click="$router.push({ path: '/' })">
                На главную
            </div>
        </div>

    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from "axios";

export default {
    data() {
        return {
            count: 0,
            route: useRoute(),
            input_name: '',
            input_pass: '',
            validate_empty_name: false,
            validate_empty_pass: false
        }
    },
    methods: {
        async login(){
            await axios
                    .post("http://80.249.147.33/api/join/room/setting", {
                        code: this.input_name,
                        password: this.input_pass
                    })
                    .then((response) => {
                        console.log(response)
                        this.$router.push({ path: '/settings/room' })
                        if (response.data.data === 'wrongPassword'){
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper-login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__window {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 28px;
        background: #CACCDB;
        border: 5px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        width: 340px;

        &__title {
            margin-bottom: 15px;
            font-style: normal;
            font-weight: 700;
            font-size: 25px;
            line-height: 33px;
            display: flex;
            align-items: center;
            text-align: center;
            //color: #7764AC;
            color: darkslategrey;
        }

        &__text {
            margin-bottom: 5px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 170%;
            display: flex;
            align-items: center;
            text-align: center;
            //color: #7764AC;
            color: darkslategrey;
        }

        &__input {
            margin-bottom: 25px;
            background: #EEEDED;
            border-radius: 5px;
            padding: 5px;
        }

        &__button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 40px;
            //background: #7764AC;
            background: darkslategrey;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            color: #EAEAEA;
            cursor: pointer;
            user-select: none;

            &:active {
                opacity: 0.8;
            }
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

        &__create {
            color: darkslategrey;
            margin-top: 15px;
            //color: #7764AC;
            cursor: pointer;
        }
    }
}
</style>