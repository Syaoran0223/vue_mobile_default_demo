import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/vuex/index'
Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }]
})

router.beforeEach((to, from, next) => {
    store.commit('globalModalCountInit')
    next()
})

export default router