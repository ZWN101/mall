<template>
  <div class="cartBottom">
       <div class="select"><check-box :isChecked='selectAll' @click.native="clickCheck"></check-box></div>
       <div class="total">合计{{totalPrice}}</div>
       <div class="goComputed" @click="goComputed">
           去计算({{checkedLength}})
       </div>
  </div>
</template>

<script>
import CheckBox from 'components/content/checkBox/CheckBox';
import {mapActions, mapGetters} from 'vuex';

export default {
    name:'CartBottom',
    components:{
        CheckBox
    },
    computed:{
         ...mapGetters(['cartItems']),
        totalPrice(){
            return "￥"+this.$store.state.cartItems.filter(item=>{
                return item.isChecked
            }).reduce((prev,item)=>{
                return prev+item.count*item.price
            },0).toFixed(2)
        },
        selectAll(){
            if(this.$store.state.cartItems.length==0) return false;
            return !this.$store.state.cartItems.find(item=>{
                return item.isChecked==false
            })
        },
        checkedLength(){
            return this.$store.state.cartItems.filter(item=>{
                return item.isChecked
            }).length
        }
    },
    methods:{
        // ...mapActions([]),
        //全选和全不选
        clickCheck(){
            if(this.selectAll){
                this.$store.state.cartItems.forEach((item) => {
                    item.isChecked=false;
                });
            }else{
                 this.$store.state.cartItems.forEach(item => {
                    item.isChecked=true;
                });
            }
        },
        //去计算
        goComputed(){
            let flag=this.cartItems.find(item=>{
                return item.isChecked
            })
            if(!flag){
                this.$toast.show('请选择商品')
            }
        }
    }
}
</script>

<style scoped>
.cartBottom{
    width: 100%;
    height: 35px;
    background-color: #eee;
    display: flex;;
    justify-content: center;
    align-items: center;
}
.select{
    width: 40px;
    padding: 0px 10px;
}
.total{
    flex: 1;
}
.goComputed{
    width: 90px;
    line-height: 40px;
    background-color: orangered;
    text-align: center;
    color: #fff;
}
</style>