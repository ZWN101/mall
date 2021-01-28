import Toast from 'components/common/toast/Toast.vue';

const obj = {}
obj.install=function (Vue) {
    // console.log('----')
    //1.创建组件构造器
    const toastconstructor=Vue.extend(Toast)
    
    //2.new的方式，根据组件构造器，创建出组件对象
    const toast = new toastconstructor()

    //3.将组件对象，活动挂载到某个元素上
    toast.$mount(document.createElement('div'))

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast=toast
  }

export default obj