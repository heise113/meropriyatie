<template>
  <div class="wrapper-message" :id="message.id">
    <svg height="120" width="205" class="wrapper-message__icon">
      <use height="120" width="205" xlink:href="@/assets/images/icons.svg#user-demo"></use>
    </svg>
    <div class="wrapper-message__text">
      {{ message.message }}
    </div>
  </div>
</template>

<script>

export default {
  props: ["messages", "message"],
  data() {
    return {
      width: innerWidth,
      height: innerHeight,
    }
  },
  methods: {
    setPosition() {
      this.message.position = {}
      this.message.position.proc1 = Math.random() * 85
      this.message.position.proc2 = Math.random() * 85
      this.message.position.cor1 = this.height / 100 * this.message.position.proc1
      this.message.position.cor2 = this.width / 100 * this.message.position.proc2
      this.message.position.cor3 = this.message.position.cor1 + 120
      this.message.position.cor4 = this.message.position.cor2 + 205
      // console.log(this.message.message, this.message.position.cor1, this.message.position.cor2, this.message.position.cor3, this.message.position.cor4)
      this.validatePosition()
    },
    validatePosition() {
      const currentElement = document.getElementById(this.message.id);
      let intersect = false
      this.messages.forEach(message => {
        if (this.message.id == message.id)
          return
        if (message.position == 'no')
          return
        else {
          if (this.message.position.cor1 >= message.position.cor1 && this.message.position.cor1 <= message.position.cor3 && this.message.position.cor2 >= message.position.cor2 && this.message.position.cor2 <= message.position.cor4
            ||
            this.message.position.cor1 >= message.position.cor1 && this.message.position.cor1 <= message.position.cor3 && this.message.position.cor4 >= message.position.cor2 && this.message.position.cor4 <= message.position.cor4
            ||
            this.message.position.cor3 >= message.position.cor1 && this.message.position.cor3 <= message.position.cor3 && this.message.position.cor2 >= message.position.cor2 && this.message.position.cor2 <= message.position.cor4
            ||
            this.message.position.cor3 >= message.position.cor1 && this.message.position.cor3 <= message.position.cor3 && this.message.position.cor4 >= message.position.cor2 && this.message.position.cor4 <= message.position.cor4) {
            intersect = true
            console.log('ura')
          }
        }
      })
      if (intersect) {
        this.setPosition()
      }
      else {
        currentElement.style.top = `${this.message.position.proc1}%`
        currentElement.style.left = `${this.message.position.proc2}%`
      }
    },
    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.setPosition()
    this.$emit('deleteMessage', this.message.id)
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>

<style scoped lang="scss">
.wrapper-message {
  position: absolute;
  width: 205px;
  height: 120px;

  &__icon {}

  &__text {
    color: white;
    position: absolute;
    top: 5px;
    left: 10px;
  }
}
</style>