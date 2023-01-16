<template>
  <div class="create-room-wrapper">
    <div class="create-room-wrapper__window">
      <div class="create-room-wrapper__window__title">
        Создание комнаты
      </div>
      <div class="create-room-wrapper__window__id">
        Введите id комнаты
      </div>
      <input v-model="input_name" class="create-room-wrapper__window__input">
      <div v-if="validate_empty_name" class="create-room-wrapper__window__validate"> Вы не ввели id </div>
      <div v-if="validate_name" class="create-room-wrapper__window__validate"> комната уже создана </div>
      <div class="create-room-wrapper__window__id">
        Введите пароль администратора
      </div>
      <input v-model="input_pass" class="create-room-wrapper__window__input" type="password">
      <div v-if="validate_empty_pass" class="create-room-wrapper__window__validate"> Вы не ввели пароль </div>
      <div class="create-room-wrapper__window__id">
        Введите пароль комнаты <br> (если нужен)
      </div>
      <input v-model="input_pass_set" class="create-room-wrapper__window__input" type="password">
      <div class="create-room-wrapper__window__button" @click="create">
        Создать
      </div>
      <div class="create-room-wrapper__window__log-in" @click="$emit('changeActive', 'login')">
        Войти
      </div>
      <div class="create-room-wrapper__window__home" @click="$router.push({ path: '/' })">
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
      input_pass_set: '',
      validate_name: false,
      validate_empty_name: false,
      validate_empty_pass: false
    }
  },
  methods: {
    up() {
      this.count++
    },
    down() {
      this.count ? --this.count : null
    },
    async create() {
      if (this.input_name !== '' && this.input_pass !== '') {
        await axios
          .post("http://80.249.147.33/api/make/room", {
            usingPassword: Boolean(this.input_pass_set),
            messageLifetime: this.$store.state.settings_screen.message_time,
            code: this.input_name,
            password: this.input_pass_set,
            adminPassword: this.input_pass
          })
          .then((response) => {
            if (response.data.data === 'roomExists'){
              this.validate_name = true
              setTimeout(() => {
                this.validate_name = false
              }, 3000)
            }
            console.log('register good')
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
          if (!this.validate_name){
            this.$router.push({ path: '/settings/room' })
          }
      }
      else if (this.input_name === '' && this.input_pass === '') {
        this.validate_empty_name = true
        this.validate_empty_pass = true
        setTimeout(() => {
          this.validate_empty_pass = false
          this.validate_empty_name = false
        }, 3000)
      }
      else if (this.input_name === '') {
        this.validate_empty_name = true
        setTimeout(() => {
          this.validate_empty_name = false
        }, 3000)
      }
      else if (this.input_pass === '') {
        this.validate_empty_pass = true
        setTimeout(() => {
          this.validate_empty_pass = false
        }, 3000)
      }

    }
  }
}
</script>

<style scoped lang="scss">
.create-room-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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

    &__validate {
      color: red;
      position: relative;
      bottom: 23px;
    }
  
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
  
    &__id {
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
  
    &__timer {
      margin-bottom: 78px;
  
      &__text {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        margin-bottom: 5px;
  
        color: #7764AC;
  
      }
  
      &__func {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 5px;
  
        &__count {
          width: 30px;
          height: 20px;
          background: #979FB5;
          border-radius: 10px;
          font-weight: 700;
          font-size: 10px;
          line-height: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          color: #EAEAEA;
        }
  
        &__arrow {
  
          &__up,
          &__down {
            padding: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #979FB5;
            border-radius: 20px;
            margin-bottom: 3px;
            user-select: none;
            cursor: pointer;
  
            &:active {
              opacity: 0.8;
            }
          }
  
          :last-child {
            margin-bottom: 0;
          }
        }
      }
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
  
    &__log-in {
      color: darkslategrey;
      margin-top: 15px;
      //color: #7764AC;
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

}
</style>