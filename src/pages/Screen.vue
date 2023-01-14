<template>
  <div class="main-wrapper">
    <transition name="fade" mode="out-in">
      <LogIn
          v-if="active.login"
          @changeActive="changeActive"
      />
      <CreateRoom
          v-else-if="active.create_room"
          @changeActive="changeActive"
      />
    </transition>
  </div>
</template>

<script>

import LogIn from '@/components/LogIn'
import CreateRoom from '@/components/CreateRoom'


export default {
  components: {
    LogIn,
    CreateRoom
  },
  data(){
    return {
      active: {
        login: true,
        create_room: false
      }
    }
  },
  methods: {
    changeActive(active_component){
      this.active.login = false
      this.active.create_room = false
      if (active_component == 'login'){
        this.active.login = true
      }
      else if (active_component == 'create_room'){
        this.active.create_room = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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