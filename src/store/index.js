import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const state = {
    cartItems:[]
}

const store = new Vuex.Store({
    state,
    /**
     * mutations里的一个方法最好只操作一件事情
     */
    mutations,
    actions,
    getters
})

export default store