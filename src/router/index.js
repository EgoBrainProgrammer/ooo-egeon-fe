import { createRouter, createWebHistory } from 'vue-router';

//--Components--BEGIN--------------------------------------------------------------------------------------------//
import NotFound from '@/components/pages/NotFound.vue'
import MainPage from '@/components/pages/MainPage.vue'

import Works from '@/components/pages/works/Works.vue'
import Services from '@/components/pages/services/Services.vue'
//--Components--END----------------------------------------------------------------------------------------------//

const routes = [
    { path: "/:catchAll(.*)", component: NotFound },
    { path: '/', component: MainPage },
    { path: '/ourworks', component: Works },
    { path: '/services', component: Services },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            el: to.hash,
        };
    },
});

export default router;