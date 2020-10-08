import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'u-reset.css'
import vconsole from  'vconsole'
//vant移动端组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入 vuex->store
import store from "./store";
Vue.config.productionTip = false;
new vconsole();
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
