<template>
  <transition-group name="fade">
    <div class="wrapper-screen-room">
      <div class="wrapper-screen-room__messages">
        <Message v-for="message in messages" :key="message.id" :message="message" :messages="messages"
          @deleteMessage="deleteMessage" />
      </div>
    </div>
  </transition-group>
</template>

<script>
import Message from "@/components/MessageNew";

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
      ]
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
      }, 10000)
    }
  },
  mounted() {
    setInterval(() => {
      this.messages.push({
        id: Math.floor(Math.random() * 100000),
        message: String(Math.floor(Math.random() * 100)),
        color: 'red',
        position: 'no'
      })
    }, 1000)
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>