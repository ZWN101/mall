import { debounce } from 'common/utils';
import BackTop from 'components/content/backTop/BackTop.vue';


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

export const backTopMixin = {
    data() { 
        return {
            isShowBack:false     
        }
    },
    components: {
        BackTop
    },
    methods: {
        backTop(){
            // console.log("返回顶部");
            this.$refs.scroll.scrollTo(0,0,1000);
        }
    }
   
}