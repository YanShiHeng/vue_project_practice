import axios from "axios";
import store from "../store";
// 配置通用属性
const Axios = axios.create({
  // baseURL: "http://localhost:9999",
  baseURL: "apis",
});
// 可以使用axios的拦截功能，总共有两个拦截：请求前、请求后
// axios的拦截器使用，可以使用请求前拦截，需要给请求体添加一个中间件，业务如果通过中间件处理，会继续执行请求业务
// use方法的回调函数，会入参一个AxiosRequestConfig对象
// 回调函数要求必须返回一个AxiosRequestConfig对象或一个Promise.reject方法
// 如果在拦截器中返回一个reject方法，会在axios.request方法的catch中捕获到
Axios.interceptors.request.use((config) => {
  let token = store.getters["common/token"],
    otherPath = ["user/login"]; //用来保存不需要请求权限校验的路由
  if (otherPath.includes(config.url)) {
    return config;
  } else {
    if (!token) {
      return Promise.reject({ code: 400, message: "front end error" });
    } else {
      // 将shiheng加到请求体中
      config.headers.shiheng = token;
      return config;
    }
  }
});
// 响应拦截，可以处理通用的后端响应码，比如返回403，提示用户需要重新登录（403--token失效了，或者token错误）
Axios.interceptors.response.use((response) => {
  // 判断后端返回的响应码（而不是接口的异步请求码）
  // console.log(response);
  if (response.status === 200) {
    return response;
  } else {
    alert("接口调用失败，原因：" + response.statusText);
  }
});
export default function (req) {
  if (!req.url) throw new TypeError("调用接口，不传url就不要调用");
  return new Promise((reslove) => {
    Axios.request({
      url: req.url,
      method: req.method || "GET",
      data: req.data || {},
      params: req.params || {},
    })
      .then(({ data }) => {
        reslove(data);
      })
      .catch((e) => {
        reslove(e);
      });
  });
}
