import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./pages";

// 引入element-ui组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// 自定义插件注册  全局
import MyComponent from './components'
Vue.use(MyComponent)
import "./style/index.less";
new Vue({
  router,
  store,
  render: (ce) => ce(App),
}).$mount("#app");
