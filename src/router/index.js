import {createRouter, createWebHistory} from 'vue-router'
import Homepage from '../views/Homepage.vue'
import AboutUs from "@/views/AboutUs.vue";
import ContactUs from "@/views/ContactUs.vue";
import FacultyAndStaffLandingPage from "@/views/faculty-and-staff/LandingPage.vue";
import FacultyDetails from "@/views/faculty-and-staff/FacultyDetails.vue";
import NewFaculty from "@/views/faculty-and-staff/NewFaculty.vue";
import FacultyListing from "@/views/faculty-and-staff/FacultyListing.vue";
import StaffListing from "@/views/faculty-and-staff/StaffListing.vue";

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
            name: 'faculty-and-staff',
            path: '/faculty-and-staff',
            component: FacultyAndStaffLandingPage,
            redirect: {name: 'new-faculty'},
            children: [
                {
                    path: '',
                    name: 'new-faculty',
                    component: NewFaculty
                },
                {
                    path: 'details/:facultyId',
                    name: 'faculty-details',
                    component: FacultyDetails,
                },
                {
                    path: 'faculty-listing',
                    name: 'faculty-listing',
                    component: FacultyListing,
                },
                {
                    path: 'staff-listing',
                    name: 'staff-listing',
                    component: StaffListing,
                }
            ],
            meta: {
                title: 'Faculty and Staff',
                showInNav: true
            }
        }
    ],
})

export default router
