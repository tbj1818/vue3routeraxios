import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'; // 引入Qs，这个库是axios里面包含的，不需要再下载了

var axios_instance = Axios.create({
  // config里面有这个transformRquest， 这个选项会在发送参数前进行处理。 这时候我们通过Qs.stringify转换为表单查询参数
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  // 设置Content - Type
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
Vue.use(VueAxios, axios_instance);

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(VueRouter);


//引入组件
// import Home from './components/home.vue'
// import about from './components/about.vue'

//然后创建VueRouter实例并写配置项
const router = new VueRouter({
  mode: "history",
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "home" */ './components/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './components/about.vue')
    },

  ]
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')