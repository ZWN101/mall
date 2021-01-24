import {debounce} from 'common/utils';

export const itemListenerMixin = {
    data() { 
        return {
            imageListener:null
        }
    },
    mounted() { 
        const refresh=debounce(this.$refs.scroll.refresh,200);
        this.itemImageListener=()=>{
           refresh();
        }
        this.$bus.$on('imgLoad', this.itemImageListener)
        // console.log('我执行了')
    }
}