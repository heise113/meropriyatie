import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import User from "@/pages/User";
import Screen from "@/pages/Screen";
import Settings from "@/pages/Settings";
import UserRoom from "@/pages/UserRoom";
import ScreenRoom from "@/pages/ScreenRoom";
import SettingsRoom from "@/pages/SettingsScreen";


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
        path: '/settings',
        component: Settings
    },
    {
        path: '/user/room',
        component: UserRoom
    },
    {
        path: '/screen/room',
        component: ScreenRoom
    },
    {
        path: '/settings/room',
        component: SettingsRoom
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;