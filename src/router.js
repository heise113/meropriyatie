import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import User from "@/pages/User";
import Screen from "@/pages/Screen";
import UserRoom from "@/pages/UserRoom";
import ScreenRoom from "@/pages/ScreenRoom";
import ScreenRoomNew from "@/pages/ScreenRoomNew";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/screen',
        component: Screen
    },
    {
        path: '/user/room',
        component: UserRoom
    },
    {
        path: '/screen/room',
        component: ScreenRoomNew
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;