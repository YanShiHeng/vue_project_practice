export const visitRight = [
  { path: "/home", visit: true },
  { path: "/home", visit: false },
  { path: "/home/edit", visit: true },
];
export const getToken = function () {
  return new Promise((reslove) => {
    console.log("------------------------异步请求开始");
    setTimeout(() => {
      console.log("------------------------异步请求结束");
      reslove(Math.random())
    }, 1000);
  });
};
