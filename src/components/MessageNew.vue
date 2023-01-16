<template>
  <div class="wrapper-message" :id="message.id">
    <svg :style="{ color: message.color }" height="80" width="80" class="wrapper-message__icon">
      <use height="80" width="80" xlink:href="@/assets/images/icons.svg#user"></use>
    </svg>
    <div :style="{ background: message.color }" class="wrapper-message__text">
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
      coun_render: 0
    }
  },
  methods: {
    setPosition() {
      this.message.position = {}
      this.message.position.proc1 = Math.random() * 83
      this.message.position.proc2 = Math.random() * 83
      this.message.position.cor1 = this.height / 100 * this.message.position.proc1 + 35
      this.message.position.cor2 = this.width / 100 * this.message.position.proc2
      this.message.position.cor3 = this.message.position.cor1 + 115
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
            this.message.position.cor3 >= message.position.cor1 && this.message.position.cor3 <= message.position.cor3 && this.message.position.cor4 >= message.position.cor2 && this.message.position.cor4 <= message.position.cor4
            ||
            this.message.position.cor3 >= this.height - 330 && this.message.position.cor2 <= 330
          ) {
            intersect = true
            console.log('ura')
          }
        }
      })
      if (intersect) {
        this.coun_render += 1
        console.log('render', this.coun_render)
        if (this.count_render > 100) {
          let timerId = setTimeout(() => {
            this.setPosition()
          }, 3000)
          clearTimeout(timerId)
        }
        else {
          this.setPosition()
        }
      }
      else {
        this.coun_render = 0
        currentElement.style.top = `${this.message.position.cor1}px`
        currentElement.style.left = `${this.message.position.cor2}px`
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
  height: 80px;

  &__icon {}

  &__text {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 133px;
    min-height: 50px;
    background-color: red;
    word-break: break-all;
    position: absolute;
    top: -35px;
    right: 5px;
    color: black;
    border-radius: 20px;
    border-bottom-left-radius: 1px;
  }
}
</style>