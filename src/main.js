import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as tool from './common/tool'
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.prototype.$tool= tool


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
