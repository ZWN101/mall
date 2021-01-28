export default {
    cartItemLength(state, getters, rootState) {
        return state.cartItems.length;
    },
    cartItems(state) { 
        return state.cartItems
    }
}
