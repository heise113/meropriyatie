<template>
  <div class="screen-card-mobile" v-if="width < 1024">
    <svg height="150" width="150">
      <use height="150" width="150" xlink:href="@/assets/images/icons.svg#screen"></use>
    </svg>
    <span class="screen-card-mobile__text">
      Экран
    </span>
  </div>

  <!--  ---------------------------------------------- -->

  <div class="screen-card-desktop" v-else>
    <svg class="screen-card-desktop__screen" height="150" width="150">
      <use height="150" width="150" xlink:href="@/assets/images/icons.svg#screen"></use>
    </svg>
    <span class="screen-card-desktop__text">
      Экран
    </span>
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

.screen-card-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :active {
    opacity: 0.5;
  }

  &__text {
    font-weight: 600;
  }
}

.screen-card-desktop{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.2s;

  &__screen {
    transition-duration: 0.2s;
  }

  &:hover {
    .screen-card-desktop__screen {
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