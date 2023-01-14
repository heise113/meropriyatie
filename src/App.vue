<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <div class="area" >
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div >
</template>

<script>

</script>

<style scoped lang="scss">
@import "@/assets/styles/background.css";
.fade {
  &-enter-from, &-leave-to {
    opacity: 0;
  }
  &-enter-active, &-leave-active {
    transition: all 1s ease;
  }
}
</style>

<style lang="scss">
//
</style>
