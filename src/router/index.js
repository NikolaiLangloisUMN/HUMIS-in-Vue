import {createRouter, createWebHistory} from 'vue-router'
import Homepage from '../views/Homepage.vue'
import AboutUs from "@/views/AboutUs.vue";
import ContactUs from "@/views/ContactUs.vue";
import LandingPage from "@/views/faculty-and-staff/LandingPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
            meta: {
                title: 'Homepage',
                showInNav: false
            }
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs,
            meta: {
                title: 'About Us',
                showInNav: true
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUs,
            meta: {
                title: 'Contact Us',
                showInNav: true
            }
        },
        {
            path: '/faculty-and-staff',
            name: 'faculty-and-staff',
            component: LandingPage,
            meta: {
                title: 'Faculty and Staff',
                showInNav: true
            }
        }
    ],
})

export default router
