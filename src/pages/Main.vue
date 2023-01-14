<template>
  <div class="main-mobile" v-if="width < 1024">
    <UserCard @click="$router.push({ path: 'user' })" />
    <ScreenCard @click="$router.push({ path: 'screen' })" />
  </div>

  <!-- ------------------------------------------------------------------- -->

  <div class="main-desktop" v-else>
    <UserCard @click="$router.push('/user')" />
    <ScreenCard @click="$router.push('/screen')" />
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import ScreenCard from "@/components/ScreenCard";

export default {
  components: {
    UserCard,
    ScreenCard,
  },
  data() {
    return {
      width: innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
};
</script>

<style scoped lang="scss">
.main-mobile {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  flex-direction: column;
}

.main-desktop {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 220px;
}
</style>
