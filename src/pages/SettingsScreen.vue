<template>
    <div class="wrapper-settings">
        <div class="wrapper-settings__window">
            <div class="wrapper-settings__window__title">
                Настройки экрана
            </div>
            <div class="wrapper-settings__window__timer">
                <div class="wrapper-settings__window__timer__text">Удаление сообщений через: {{ volume_value }}</div>
                <input class="wrapper-settings__window__timer__volume" v-model="volume_value" type="range" min="5" max="30">
            </div>
            <button @click="startScreen" class="wrapper-settings__window__button">
                Запустить экран
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            volume_value: 5
        }
    },
    methods: {
        startScreen() {
            this.$store.state.settings_screen.message_time = this.volume_value
            this.$router.push({ path: '/screen/room' })
        }
    },
    mounted() {
      
    }
}
</script>

<style scoped lang="scss">
.wrapper-settings {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &__window {
        padding: 28px;
        background: #CACCDB;
        border: 5px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        width: 500px;

        &__title {
            font-size: 25px;
            font-weight: 600;
            color: darkslategrey;
            text-align: center;
            margin-bottom: 20px;
        }

        &__timer {
            margin-bottom: 40px;

            &__text {
                margin-bottom: 10px;
            }

            &__volume {
                width: 210px;
                cursor: pointer;
            }
        }

        &__button {
            display: block;
            margin: 0 auto;
            width: 200px;
            padding: 20px 0;
            text-align: center;
            border: 2px solid aqua;
            background-color: blueviolet;
            border-radius: 20px;
            cursor: pointer;
            color: white;

            &:active {
                opacity: 0.7;
            }
        }
    }
}
</style>
