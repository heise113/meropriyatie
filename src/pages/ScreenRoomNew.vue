<template>
  <div class="wrapper-screen-room">
    <div class="wrapper-screen-room__messages">
      <transition-group name="fade">
        <Message v-for="message in messages" :key="message.id" :message="message" :messages="messages"
          @deleteMessage="deleteMessage" />
      </transition-group>
    </div>
    <img class="wrapper-screen-room__qr" src="../assets/images/qr-code.png">
  </div>
</template>

<script>
import Message from "@/components/MessageNew";
import axios from "axios";

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  components: {
    Message
  },
  data() {
    return {
      messages: [
        // {
        //   id: 1000,
        //   message: 'srdgd',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1001,
        //   message: 'tewertdf1',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1002,
        //   message: 'hfjdhrth',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1003,
        //   message: '346534563h',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1004,
        //   message: 'trkjtyrjtry',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1005,
        //   message: 'srdgd',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1006,
        //   message: 'tewertdf1',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1007,
        //   message: 'hfjdhrth',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1008,
        //   message: '346534563h',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1009,
        //   message: 'trkjtyrjtry',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1010,
        //   message: 'srdgd',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1011,
        //   message: 'tewertdf1',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1012,
        //   message: 'hfjdhrth',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1013,
        //   message: '346534563h',
        //   color: 'red',
        //   position: 'no'
        // },
        // {
        //   id: 1014,
        //   message: 'trkjtyrjtry',
        //   color: 'red',
        //   position: 'no'
        // },
      ],
      messages_store: [],
      last_message_id: 0,
    }
  },
  methods: {
    deleteMessage(id) {
      setTimeout(() => {
        this.messages.forEach((item, index) => {
          if (id == item.id) {
            console.log(id, item.id)
            this.messages.splice(index, 1)
          }
        })
      }, this.$store.state.settings_screen.message_time * 1000)
    },
    ff() {
      setInterval(async () => {
        this.messages_store[this.messages_store.length - 1] ? this.last_message_id = this.messages_store[this.messages_store.length - 1].id : 0
        await axios
            .post('http://80.249.147.33/api/messages', {
              id: this.last_message_id,
              code: this.$store.state.user_login
            })
            .then(response => {
                  this.messages_store = this.messages.concat(response.data)
                  console.log(this.messages_store)
                }
            );
      }, 3000)
    }
  },
  mounted() {
    setInterval(() => {
      // this.messages_store.push({
      //   id: Math.floor(Math.random() * 100000),
      //   message: String(Math.floor(Math.random() * 100)),
      //   color: `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
      //   position: 'no'
      // })

      if (this.messages.length <= 15 && this.messages_store.length !==0) {
        this.messages.push(this.messages_store.pop())
      }
    }, 1000)

    if(this.$route.fullPath === '/screen/room')
      this.ff()
  }
}
</script>

<style scoped lang="scss">
.wrapper-screen-room {
  height: 100%;
  position: relative;

  &__messages {
    height: 100%;
  }

  &__qr {
    position: absolute;
    bottom: 20px;
    left: 20px;

    width: 250px;
    height: 250px;
  }
}


.fade-enter-active {
  animation: fade-in .5s ease-out both;
}

.fade-leave-active {
  animation: fade-in .5s reverse ease-in both;
}

@keyframes fade-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>