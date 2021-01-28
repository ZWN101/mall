import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index';
import Toast from './components/common/toast';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false

Vue.use(Toast)
//图片懒加载,第二个参数 loading：占位图
Vue.use(VueLazyload, {
  loading:require('./assets/img/common/placeholder.png')
})

//解决移动端延迟300ms的问题
FastClick.attach(document.body);

//事件总线
Vue.prototype.$bus=new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
