import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import IndexView from '../components/Frame.vue';
import Tabla from '../components/Tabla.vue';
import Update from '../components/Update.vue';

export default new Router({
    mode:'history',
    routes: [
        { 
            path: '/', 
            name:'/',
            component: Tabla
            
        },
        { 
            path: '/registrar',
            name:'/registrar',
            component: IndexView
            
        },
        { 
            path: '/update',
            name:'/update',
            component: Update
            
        },
   
    ]

});