<template>
  <div class="user-card-mobile" v-if="width < 1024">
    <svg height="150" width="150">
      <use height="150" width="150" xlink:href="@/assets/images/icons.svg#user"></use>
    </svg>
    <span class="user-card-mobile__text">Пользователь</span>
  </div>

  <!--  ---------------------------------------------- -->

  <div class="user-card-desktop" v-else>
    <svg class="user-card-desktop__user" height="150" width="150">
      <use height="150" width="150" xlink:href="@/assets/images/icons.svg#user"></use>
    </svg>
    <span class="user-card-desktop__text">Пользователь</span>
  </div>
</template>

<script>
export default {
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
    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  }
}
</script>

<style scoped lang="scss">

.user-card-mobile {
  display: flex;
  align-items: center;
  flex-direction: column;

  :active {
    opacity: 0.5;
  }

  &__text {
    font-weight: 600;
  }
}

.user-card-desktop {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  &__user {
    transition-duration: 0.2s;
  }

  &:hover {
    .user-card-desktop__user {
      transition-duration: 0.2s;
      transform: scale(1.1);
    }
  }

  :active {
    opacity: 0.5;
  }

  &__text {
    font-weight: 600;
  }
}

</style>