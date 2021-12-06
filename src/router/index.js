import Vue from "vue";
import Router from "vue-router";
import { visitRight } from "../mock";
import store from '../store'
Vue.use(Router);
// 路由懒加载、动态加载
const NotFound = () => import("../pages/common/NotFound.vue");
const NotRight = () => import("../pages/common/NotRight.vue");
const Home = () => import("../pages/home/index.vue");
const HomeEdit = () => import("../pages/home/Edit.vue");
const Login = () => import("../pages/login/index.vue");
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login, meta: { layout: "blank-layout" } },
  {
    path: "/home",
    component: Home,
    meta: { requiredLogin: true, layout: "main-layout" },
  },
  {
    path: "/home/edit",
    component: HomeEdit,
    meta: { requiredLogin: true, layout: "main-layout" },
  },
  { path: "/403", component: NotRight },
  { path: "*", component: NotFound },
];
const router = new Router({
  routes,
  mode: "history",
});
// 全局拦截
router.beforeEach(function (to, from, next) {
  // 是否为登录页面
  if (to.path === "/login") {
    next();
    return;
  }
  // 判断是否需要登录以后才能访问
  if (to.meta.requiredLogin) {
    // 一般采用token来进行判断
    // if (!!sessionStorage.getItem("token")) {
    if (!!store.getters["common/token"]) {
      // 是否有权限
      let myRight = visitRight.find((it) => it.path === to.path);
      if (!!myRight && myRight.visit) next();
      else next("/403");
    } else {
      // 如果是从登录页面过来，直接终止业务即可
      if (from.path !== "/login") next("/login");
    }
  }
});

export default router;
