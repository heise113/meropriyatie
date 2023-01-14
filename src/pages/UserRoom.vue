<template>
  <div class="wrapper-user-room">
    <transition name="fade" mode="out-in">
      <Congratulations v-if="active.congratulations" @changeActive="changeActive"/>
      <Chat v-else-if="active.chat" @changeActive="changeActive"/>
    </transition>
  </div>
</template>

<script>
import Congratulations from "@/components/Congratulations";
import Chat from "@/components/Chat";
export default {
  components: {
    Congratulations,
    Chat
  },
  data() {
    return {
      active: {
        chat: false,
        congratulations: true,
      }
    }
  },
  methods: {
    changeActive(active_component) {
      this.active.chat = false
      this.active.congratulations = false
      if (active_component == 'chat') {
        this.active.chat = true
      } else if (active_component == 'congratulations') {
        this.active.congratulations = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper-user-room {
  height: 100%;
}
.fade {
  &-enter-from, &-leave-to {
    opacity: 0;
  }
  &-enter-active, &-leave-active {
    transition: all 0.3s ease;
  }
}
</style>