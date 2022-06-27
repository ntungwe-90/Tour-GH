import HomePage from '@/pages/home.vue';
import AboutPage from '@/pages/about.vue';
import ContactPage from '@/pages/contact.vue';
import LoginPage from '@/pages/login.vue';
import RegisterPage from '@/pages/register.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'about',
        path: '/about',
        component: AboutPage
    },
    {
        name: 'contact',
        path: '/contact',
        component: ContactPage
    },
    {
        name: 'login',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'register',
        path: '/register',
        component: RegisterPage
    }
]

export default routes;