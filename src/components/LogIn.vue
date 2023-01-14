<template>
  <div class="log-in-wrapper">
    <span class="log-in-wrapper__text">
      Войти в комнату
    </span>
    <input type="text" class="log-in-wrapper__input" placeholder="Введите ID: #1234">
    <div class="log-in-wrapper__validate-error" v-if="validate">
      неверный id
    </div>
    <button class="log-in-wrapper__button" v-if="route.path == '/user'" @click="validateUser">
      Войти
    </button>
    <button class="log-in-wrapper__button" v-if="route.path == '/screen'" @click="validateScreen">
      Войти
    </button>
    <div class="log-in-wrapper__create" v-if="route.path == '/screen'" @click="$emit('changeActive', 'create_room')">
      Создать
    </div>
    <div class="log-in-wrapper__home" @click="$router.push({path: '/'})">
      На главную
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
  data(){
    return {
      route: useRoute(),
      validate: false,
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
    validateUser(){
      // this.validate = false
      // if (this.validate) {
      //   setTimeout(() => {
      //     this.validate = false
      //   }, 3000)
      // }
      // else {
      //   this.createCookie("room", 123123, 99999)
      //   console.log(this.getCookie('room'))
      //   this.$router.push('/user/room/')
      // }
      this.$router.push('/user/room/')
    },
    validateScreen(){
      this.validate = false
      if (this.validate) {
        setTimeout(() => {
          this.validate = false
        }, 3000)
      }
      else {
        this.$router.push({path: '/screen/room'})
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