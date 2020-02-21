import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Registration from "./views/registration.vue";
import Chat from "./views/Chat.vue";
import Contact from "./views/Contact.vue";
import Rules from "./views/Rules.vue";
import Gameinformation from "./views/Gameinformation.vue";
import RegistrationLogin from "./views/regislogin.vue";
import Profile from "./views/profile.vue";
Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/registration",
            name: "registration",
            component: Registration
        },
        {
            path: "/Chat",
            name: "chat",
            component: Chat
        },
        {
            path: "/Contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/Rules",
            name: "rules",
            component: Rules
        },
        {
            path: "/regislogin",
            name: "Registration/Login",
            component: RegistrationLogin
        },
        {
            path: "/Gameinformation",
            name: "gameinformation",
            component: Gameinformation
        },
        {
            path: "/Profile",
            name: "profile",
            component: Profile
        }
    ]
});