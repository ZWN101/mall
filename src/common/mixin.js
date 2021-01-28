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
        //接收事件总线imgLoad，第二个参数为要执行的函数
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