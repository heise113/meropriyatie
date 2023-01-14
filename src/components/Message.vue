<template>
  <div class="message" v-if="message && array" :id="message.id">
    <svg class="message__icon" :style="{color: message.color}" height="122" width="208" id="user-demo">
      <use height="122" width="208" xlink:href="@/assets/images/icons.svg#user-demo"></use>
    </svg>
    <span class="message__text">{{ message.message }}</span>
  </div>
</template>

<script>
export default {
  props: ["message", "array"],
  data() {},
  methods: {
    setPosition() {
      const currentElement = document.getElementById(this.message.id);

      console.log(currentElement);

      currentElement.style.cssText = `
        margin-left: ${Math.random() * 100 + 10}px;
        margin-top: ${Math.random() * 100 + 10}px
      `;
    },
  },
  mounted() {
    if (this.array) {
      this.setPosition();
    }
  },
};
</script>

<style scoped lang="scss">
.message {
  width: 256px;
  height: 157px;
  position: relative;
  &__text {
    width: 133px;
    word-break: break-all;
    position: absolute;
    top: 2px;
    left: 5px;
    color: black;
  }
  &__icon {

  }
}
</style>
