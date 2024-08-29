import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import IndividualView from '../views/Individual.vue';
import CompanyView from '../views/Company.vue';
import DashboardView from '../views/Dashboard.vue';
import MainDash from '../components/MainDash.vue';
import QrCodeScanner from '../components/QrCodeScanner.vue';
import LoginView from '../views/Login.vue';
import { useStore } from 'vuex';

function requireAuth(to, from, next) {
    const store = useStore();
    const user = store.state.auth.user;
    if (user) {
        next();
    } else {
        next('/login');
    }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      children: [
        {
          path: 'individual',
          name: 'individual',
          component: IndividualView,
        },
        {
          path: 'company',
          name: 'company',
          component: CompanyView,
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      // beforeEnter: requireAuth,
      children: [
        {
          path: '',
          name: 'MainDash',
          component: MainDash,
        },
        {
          path: 'scan',
          name: 'QrCodeScanner',
          component: QrCodeScanner,
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { top: 0,behavior: 'smooth', }
      // return {x: 0, y: 0}
    }
  },
});

export default router;
