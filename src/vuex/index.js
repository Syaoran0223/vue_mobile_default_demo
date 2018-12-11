import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        text: 111111111111111,

        // 加载弹窗
        isloading: false,
        // 全局弹窗计数
        globalModalCount: 0,
    },
    mutations: {
        // 全局弹窗 增减归零
        globalModalCountAdd(state) {
            state.globalModalCount += 1
            // log('全局加载当前计数 add', state.globalModalCount)
        },
        globalModalCountReduce(state) {
            state.globalModalCount -= 1
            // log('全局加载当前计数 reduce', state.globalModalCount)
        },
        globalModalCountInit(state) {
            state.globalModalCount = 0
            // log('全局加载当前计数 init', state.globalModalCount)
        }
    },
    getters: {
        text: state => {
            console.log('getters state', state.text)
            return state.text
        },
    },
})