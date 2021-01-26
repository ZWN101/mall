import types from './mutations_types';

export default {
    addCart(context, payload) { 
        let product = null;

        // for (let item of state.cartItems) { 
        //     if (item.iid == payload.iid) { 
        //         product = item;
        //     }
        // }
        
        product = context.state.cartItems.find(function (item) {
            return item.iid == payload.iid;
        });

        if (product) {
            //商品数量加一
            context.commit(types.ADD_COUNT, product);
        } else {
            //新添商品数量
            payload.count = 1;
            context.commit(types.ADD_NEWITEM,payload)
        }

    }
}