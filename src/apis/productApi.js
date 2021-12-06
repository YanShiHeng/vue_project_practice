import Ajax from "./ajax";
export const listApi = (params) => {
  return Ajax({
    url: "/product/list",
    params,
  });
};
