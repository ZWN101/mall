<template>
  <div class="cartBottom">
       <div class="select"><check-box :isChecked='selectAll' @click.native="clickCheck"></check-box></div>
       <div class="total">合计{{totalPrice}}</div>
       <div class="goComputed">
           去计算{{}}
       </div>
  </div>
</template>

<script>
import CheckBox from 'components/content/checkBox/CheckBox';
export default {
    name:'CartBottom',
    components:{
        CheckBox
    },
    computed:{
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
        }
    },
    methods:{
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