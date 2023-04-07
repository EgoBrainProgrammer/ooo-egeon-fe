import { createRouter, createWebHistory } from 'vue-router';

//--Components--BEGIN--------------------------------------------------------------------------------------------//
import NotFound from '@/components/pages/NotFound.vue'
import MainPage from '@/components/pages/MainPage.vue'

import About from '@/components/pages/about/About.vue'
import Contacts from '@/components/pages/contacts/Contacts.vue'
import Works from '@/components/pages/works/Works.vue'
import Services from '@/components/pages/services/Services.vue'
import Consumers from '@/components/pages/consumers/Consumers.vue'
import CertsLicenses from '@/components/pages/certslicenses/CertsLicenses.vue'
//--Components--END----------------------------------------------------------------------------------------------//

const routes = [
    { path: "/:catchAll(.*)", component: NotFound },
    { path: '/', component: MainPage },
    // { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/ourworks', component: Works },
    { path: '/services', component: Services },
    { path: '/consumers', component: Consumers },
    { path: '/cocertslicenses', alias: '/certs', component: CertsLicenses },
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