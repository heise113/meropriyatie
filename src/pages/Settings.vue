<template>
    <div class="wrapper-settings">
        <transition name="fade" mode="out-in">
            <LoginSettingsRoom v-if="active.login_settings_room" @changeActive="changeActive" />
            <CreateRoom v-else-if="active.create_room" @changeActive="changeActive" />
        </transition>
    </div>
</template>

<script>
import LoginSettingsRoom from '@/components/LoginSettingsRoom.vue';
import CreateRoom from '@/components/CreateRoom.vue';

export default {
    components: {
        LoginSettingsRoom,
        CreateRoom
    },
    data() {
        return {
            active: {
                login_settings_room: true,
                create_room: false
            }
        }
    },
    methods: {
        changeActive(active_component) {
            this.active.login_settings_room = false
            this.active.create_room = false
            if (active_component == 'login') {
                this.active.login_settings_room = true
            }
            else if (active_component == 'create_room') {
                this.active.create_room = true
            }
        }
    }

}
</script>

<style scoped lang="scss">
.wrapper-settings {
    height: 100%;

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