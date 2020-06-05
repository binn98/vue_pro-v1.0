// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import extend from '@/components/vue_extend'
import router from './router'
import axios from 'axios'
import store from '../store/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
router.beforeEach((to,from,next)=>{
  let id = store.state.id
 
  if(to.path == '/home'){
    if(id!=null&&id!=undefined&&id!=''){
      console.log(id);
      next()
    }else{
      ElementUI.Message.error('请先登录');
      router.replace('/logo')
    }
  }else{
    next()
  }
})
Vue.use(ElementUI)
// axios.defaults.headers.post['Contenst-Type'] = 'application/json;'
axios.defaults.headers.token ='1234545'; //定义请求头 
//axios.defaults.baseURL = ''; //定义请求基准路径
// axios请求拦截器
axios.interceptors.request.use(config=>{
  //请求数据之前做什么
  console.log(config);
})
// axios响应拦截器
// axios.interceptors.response.use((res,error
// ) =>{
//   // console.log(res);
//   // console.log(error);
// })
/* eslint-disable no-new */
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.component('extend',extend)
new Vue({
  el: '#app', 
  router,
  store,
  components: { App },
  template: '<App/>'
})
