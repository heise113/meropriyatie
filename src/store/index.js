import {createStore} from "vuex";

export default createStore({
    state: {
        settings_screen: {
            message_time: 15
        },
        user_login: null,
        active_room: null
    }
})