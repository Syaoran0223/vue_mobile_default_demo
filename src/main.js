// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// px2rem
import 'lib-flexible'

import store from './vuex/'

Vue.use(store)

Vue.component(Spinner.name, Spinner);

Vue.config.productionTip = false

import {log} from '@/components/common/utils'

Vue.prototype.log = log
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
})
