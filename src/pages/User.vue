<template>
  <div class="main-wrapper">
    <transition name="fade">
      <LogIn v-if="active.login" @changeActive="changeActive"/>
    </transition>
  </div>
</template>

<script>

import LogIn from '@/components/LogIn'

export default {
  components: {
    LogIn,
  },
  data() {
    return {
      active: {
        login: true,
      }
    }
  },
  methods: {
    changeActive(active_component) {
      this.active.login = false
      if (active_component == 'login') {
        this.active.login = true
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