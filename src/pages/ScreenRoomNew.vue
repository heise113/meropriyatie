<template>
  <div class="wrapper-screen-room">
    <div class="wrapper-screen-room__messages">
      <transition-group name="fade">
        <Message v-for="message in messages" :key="message.id" :message="message" :messages="messages"
          @deleteMessage="deleteMessage" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Message from "@/components/MessageNew";

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
        color: `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
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

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s ease;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }



// .fade-enter-active {
//   transition: all .3s ease-out;
// }

// .fade-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }

// .fade-enter-from,
// .fade-leave-to {
//   transform: translateX(20px);
//   opacity: 0;
// }



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