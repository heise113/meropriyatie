<template>
  <div class="main-wrapper">
    <transition name="fade" mode="out-in">
      <LogIn v-if="active.login" @changeActive="changeActive" />
      <LoginPassword v-else-if="active.login_pass" @changeActive="changeActive"/>
    </transition>
  </div>
</template>

<script>

import LogIn from '@/components/LogIn'
import LoginPassword from '@/components/Password.vue'

export default {
  components: {
    LogIn,
    LoginPassword
  },
  data() {
    return {
      active: {
        login: true,
        login_pass: false
      }
    }
  },
  methods: {
    changeActive(active_component) {
      this.active.login = false
      this.active.login_pass = false
      if (active_component == 'login') {
        this.active.login = true
      }
      else if (active_component == 'login_pass') {
        this.active.login_pass = true
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

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }
}
</style>