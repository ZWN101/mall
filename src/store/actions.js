import types from './mutations_types';

export default {
    addCart(context, payload) { 
        return new Promise((resolve, reject) => {
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
                resolve('商品数量加一');
            } else {
                //新添商品
                payload.count = 1;
                payload.isChecked = true;
                context.commit(types.ADD_NEWITEM, payload)
                resolve('添加商品')
            }
         })
      

    }
}