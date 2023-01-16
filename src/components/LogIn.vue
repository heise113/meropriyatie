<template>
  <div class="log-in-wrapper">
    <span class="log-in-wrapper__text">
      Войти в комнату
    </span>
    <input v-model="input_room" type="text" class="log-in-wrapper__input" placeholder="Введите ID: #1234">
    <div class="log-in-wrapper__validate-error" v-if="validate_room">
      неверный id комнаты
    </div>
    <div class="log-in-wrapper__validate-error" v-if="validate_name">
      пользователь не зарегистрирован
    </div>
    <div class="log-in-wrapper__validate-error" v-if="validate_empty_room">
      введите id комнаты
    </div>
    <button class="log-in-wrapper__button" v-if="route.path == '/user'" @click="validateUser">
      Далее
    </button>
    <button class="log-in-wrapper__button" v-if="route.path == '/screen'" @click="validateScreen">
      Далее
    </button>
    <div class="log-in-wrapper__home" @click="$router.push({ path: '/' })">
      На главную
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from "axios";

export default {
  data() {
    return {
      route: useRoute(),
      validate_room: false,
      validate_empty_room: false,
      input_room: '',
    }
  },
  methods: {
    createCookie(name, value, days) {
      var expires;
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
      }
      else {
        expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    },
    getCookie(c_name) {
      if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
          c_start = c_start + c_name.length + 1;
          c_end = document.cookie.indexOf(";", c_start);
          if (c_end == -1) {
            c_end = document.cookie.length;
          }
          return unescape(document.cookie.substring(c_start, c_end));
        }
      }
      return "";
    },
    async validateUser() {
      if (this.input_room !== '') {
        this.validate_empty_room = false

        await axios
          .post("http://80.249.147.33/api/join/room", {
            code: this.input_room
          })
          .then((response) => {
            console.log('register good')
            console.log(response)

            if (response.data.data === 'code') {
              this.validate_room = true
              setTimeout(() => {
                this.validate_room = false
              }, 3000)
            }
          })
          .catch((error) => {
            console.log(error)
          })
        if (!this.validate_room) {
          this.$store.state.login = this.input_room
          this.$emit('changeActive', 'login_pass')
        }
      }
      else {
        this.validate_room = false
        this.validate_empty_room = true
        setTimeout(() => {
          this.validate_empty_room = false
        }, 3000)
      }
    },
    validateScreen() {
      if (this.input_room !== '') {
        this.validate_empty_room = false
        setTimeout(() => {
          this.$emit('changeActive', 'login_pass')
        }, 3000)
      }
      else {
        this.validate_room = false
        this.validate_empty_room = true
        setTimeout(() => {
          this.validate_empty_room = false
        }, 3000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.log-in-wrapper {
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

  &__validate-error {
    margin-top: -20px;
    text-align: center;
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