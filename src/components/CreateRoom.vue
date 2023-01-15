<template>
  <div class="create-room-wrapper">
    <div class="create-room-wrapper__title">
      Создание комнаты
    </div>
    <div class="create-room-wrapper__id">
      Введите ID
    </div>
    <input class="create-room-wrapper__input">
    <div class="create-room-wrapper__id">
      Введите пароль(если нужен)
    </div>
    <input class="create-room-wrapper__input" type="password">
    <div class="create-room-wrapper__button" @click="create">
      Создать
    </div>
    <div class="create-room-wrapper__log-in" v-if="route.path == '/screen'" @click="$emit('changeActive', 'login')">
      Войти
    </div>
    <div class="create-room-wrapper__home" @click="$router.push({path: '/'})">
      На главную
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router';

export default {
  data() {
    return {
      count: 0,
      route: useRoute()
    }
  },
  methods: {
    up() {
      this.count++
    },
    down() {
      this.count ? --this.count : null
    },
    create() {
      // this.$emit('changeActive', 'login')
      this.$router.push({path: '/screen/settings'})
    }
  }
}
</script>

<style scoped lang="scss">
.create-room-wrapper {
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
        &__up, &__down {
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
</style>