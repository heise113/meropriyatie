<template>
    <div class="wrapper-settings">
        <div class="wrapper-settings__window">
            <div class="wrapper-settings__window__title">
                Настройки экрана
            </div>
            <div class="wrapper-settings__window__timer">
                <div class="wrapper-settings__window__timer__text">Удаление сообщений через: {{ volume_value }}</div>
                <input class="wrapper-settings__window__timer__volume" step="any" type="range" ref="volume" min="5" max="30">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            volume_value: null
        }
    },
    mounted(){
        
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
            &__text {
                margin-bottom: 10px;
            }

            &__volume {
                width: 200px;
                cursor: pointer;
            }
        }
    }
}
</style>
