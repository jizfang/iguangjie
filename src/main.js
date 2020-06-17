// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import env from './env'

// mock开关  import - 预编译加载 
const mock = true;
if(mock){
  require('./mock/api')
}

//根据前端跨域方式做调整 
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//根据环境变量获取不同地址
//axios.defaults.baseURL = env.baseURL;

//全局拦截器
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10001){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
