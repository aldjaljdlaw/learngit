


/*Vue-router使用指南
*   导入vuerouter：router即路由；用以实现页面跳转
*   使用vuerouter：Vue.use(vuerouter)
*   前往index.js配置并使用router
* */

/*踩雷
  问题：页面可以跳转，但无法显示页面中组件的内部信息
    解决办法： 下方导包语句中的import router from './router/index，其中的router是固定写法，导入了index文件中的所有router，而不是导入index文件内自行命名的Router1，
    且下方注入vue时的router也是此时导包进来的router，前后两个router都是代指所有抽象意义上的路由器而非其他文件各自命名的某个路由器*/

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import VueRouter from 'vue-router'
import router from './router/index'
import Vuex from "vuex";
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from "axios";
import store from "store"

//使用vue-router
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  //使用路由配置
  router,
  store,
  components: { App },
  template: '<App></App>'
})
