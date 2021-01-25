import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartItems:[]
    },
    mutations: {
        addCartItem(state, payload) { 
            let product = null;
            product = state.cartItems.find(function (item) {
                return item.iid == payload.iid;
            })
            
            // for (let item of state.cartItems) { 
            //     if (item.iid == payload.iid) { 
            //         product = item;
            //     }
            // }

            if (product) {
                product.count++;
            } else {
                payload.count = 1;
                state.cartItems.push(payload);
            }
            console.log(state.cartItems)
        }
    },
    actions: {

    },
    getters: {

    }
})

export default store