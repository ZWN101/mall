import types from './mutations_types';
export default {
    [types.ADD_NEWITEM](state, payload) { 
        state.cartItems.push(payload);
        console.log(state.cartItems);
    },
    [types.ADD_COUNT](state, payload) { 
        payload.count++;
        console.log(state.cartItems);
    }
}