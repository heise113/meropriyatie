<template>
  <div class="congratulations-wrapper">
    <div class="congratulations-wrapper__window">
      <div class="congratulations-wrapper__window__title">
        Поздравляем!
      </div>
      <div class="congratulations-wrapper__window__text">
        Теперь вы можете отправлять сообщения и задавать вопросы, которые будут выведены на общий экран
      </div>
      <button class="congratulations-wrapper__window__button" @click="$emit('changeActive', 'chat')">
        Окей
      </button>
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router';

export default {
  data() {
    return {
      route: useRoute()
    }
  }
}
</script>

<style scoped lang="scss">
.congratulations-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__window {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px;
    background: #CACCDB;
    border: 5px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 260px;

    &__title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #7764AC;
      margin-bottom: 13px;
    }

    &__text {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #7764AC;
      text-align: center;
      margin-bottom: 10px;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 40px;
      background: #7764AC;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      color: #EAEAEA;
      cursor: pointer;
      user-select: none;

      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>