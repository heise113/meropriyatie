<template>
  <div class="wrapper-screen">
    <div class="wrapper-screen__messages-wrapper">
      <Message
          v-for="message in messages"
          :key="message.id"
          :message="message"
          :array="messages"
      />
    </div>
    <div class="wrapper-screen__qr-code">
      <img style="height: 300px; width: 300px;" src="../assets/images/qr-code.png">
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import axios from "axios"

const arrayMock = [
  {
    color: "red",
    text: "lalala",
    id: 1,
  },
  {
    color: "blue",
    text: "fsadfsadfs",
    id: 2,
  },
  {
    color: "green",
    text: "1242342314",
    id: 3,
  },
  {
    color: "purple",
    text: "nfdgfdg",
    id: 4,
  },
  {
    color: "black",
    text: "oiuyoyuo",
    id: 5,
  },
  {
    color: "red",
    text: "hjlklhjlkjh",
    id: 6,
  },
  {
    color: "white",
    text: "khg436ytrhd",
    id: 7,
  },
  {
    color: "blue",
    text: "dfjg645herd",
    id: 8,
  },
  {
    color: "green",
    text: "dfjg645herd",
    id: 9,
  },
  {
    color: "gray",
    text: "dfjg645herd",
    id: 10,
  },
  {
    color: "orange",
    text: "1234567890123456789012345",
    id: 11,
  },
  {
    color: "red",
    text: "dfjg645herd",
    id: 12,
  },
  {
    color: "yellow",
    text: "dfjg645herd",
    id: 13,
  },
  {
    color: "purple",
    text: "dfjg645herd",
    id: 14,
  },
  {
    color: "orange",
    text: "dfjg645herd",
    id: 15,
  },
];

export default {
  components: {
    Message,
  },
  data() {
    return {
      lalala: null,
      messages: [],
      last_message_id: 0,
    };
  },
  methods: {
    ff() {
      setInterval(async () => {
        this.messages[this.messages.length - 1] ? this.last_message_id = this.messages[this.messages.length - 1].id : 0
        await axios
            .post('http://80.249.147.33/api/messages', {
              id: this.last_message_id
            })
            .then(response => {
                  this.messages = this.messages.concat(response.data)
                  //console.log(response.data)
                }
            );
      }, 1500)
    }
  },
  mounted() {
    // console.log(this.$route);
    if(this.$route.fullPath === '/screen/room')
      this.ff()
    // this.messages = arrayMock.slice(0, 13);


  },
  // beforeDestroy() {
  //   clearInterval()
  // }
  // watch() {
  //   messages: {
  //     handler(newMessages, oldMessages) {

  //     },
  //     deep: true
  //   }
  // }
};
</script>

<style scoped lang="scss">
.wrapper-screen {
  position: relative;
  height: 100%;

  &__messages-wrapper {
    display: flex;
    width: 100vw;
    height: 70vh;
    flex-wrap: wrap;
  }

  &__qr-code {
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
}
</style>
