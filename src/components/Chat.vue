<template>
  <div class="wrapper-chat">
    <div class="wrapper-chat__title">
      Выберите цвет аватара
    </div>
    <div class="wrapper-chat__user-demo">
      <svg height="122" width="208" id="user-demo">
        <use height="122" width="208" xlink:href="@/assets/images/icons.svg#user-demo"></use>
      </svg>
    </div>
    <color-picker v-bind="color" @input="onInput"></color-picker>
    <div class="wrapper-chat__input">
      <input maxlength="25" type="text" placeholder="Ваше сообщение..." v-model="message">
      <svg @click="send" height="25" width="25" class="wrapper-chat__input__icon">
        <use height="25" width="25" xlink:href="@/assets/images/icons.svg#input-arrow"></use>
      </svg>
    </div>
    <div class="wrapper-chat__log-out" @click="logOut">
      Выйти
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import axios from "axios";
import ColorPicker from '@radial-color-picker/vue-color-picker';

export default {
  components: { ColorPicker },
  setup() {
    const color = reactive({
      hue: 50,
      saturation: 100,
      luminosity: 50,
      alpha: 1,
    });
    return {
      color,
      onInput(hue) {
        color.hue = hue;
        document.getElementById('user-demo').style.color = `hsla(${hue},100%,50%,1)`
      },
    };
  },
  data(){
    return {
      message: ""
    }
  },
  methods: {
    logOut(){
      this.$router.push({path: '/'})
    },
    hslToHex(h, s, l) {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    },
    async send(){
      if(this.message.length === 0)
      {
        alert('Нельзя вводить пустое сообщение');
        return;
      }
      await axios
          .post("http://80.249.147.33/api/send/message", {
            message: this.message,
            color: this.hslToHex(this.color.hue, this.color.saturation, this.color.luminosity)
          })
          .then((response) => {
            console.log('register good')
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      this.message = null
      // await axios
      //     .get("http://80.249.147.33/api")
      //     .then(response => console.log(response))
      //     .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped lang="scss">
@import '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';

.wrapper-chat {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    color: #EAEAEA;
    margin-bottom: 30px;
    text-align: center;
  }
  &__user-demo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    & svg {
      color: orange;
    }
  }
  &__input {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    margin-top: 70px;
    width: 280px;
    height: 60px;
    background: #CACCDB;
    border: 5px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding-right: 10px;
    input {
      flex: 1;
      height: 90%;
      padding: 5px 15px;
    }
    &__icon {
      cursor: pointer;
      &:active {
        opacity: 0.8;
      }
    }
  }
  &__log-out {
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    color: white;
  }
}
</style>