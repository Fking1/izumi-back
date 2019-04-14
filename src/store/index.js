import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import app from './modules/app'
import admin from './modules/admin'

Vue.use(Vuex)

export default new Vuex.Store({
    mutations,
    getters,
    actions,
    modules: {
        app,
        admin
    },
    // strict: process.env.NODE_ENV !== 'production'
})

// 引入Vuex、使用Vuex、定义state对象、暴露接口

// 使用方法
// 1、可以在每个子组件中引入此文件 然后直接使用store对象/接口
// 2、在根实例下引入此文件 然后使用在每个子组件直接使用this.$store

// computed:{
//     ...mapGetters([

//     ]),
//     ...mapMutations([

//     ]),
//     ...mapActions({

//     })
// }
// 在组件中监听的方式