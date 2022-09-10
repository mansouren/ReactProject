import http from "./httpService";

const apiEndPoint = "/ModuleValidator";

export const getAllItems = async () => {
  var promise = await http.get(apiEndPoint);
  return promise.data.Data;
};

export const addItem = async (item) => {
  var promise = await http.post(apiEndPoint, item);
  return promise.data.Data;
};

export const updateItem = async (item, id) => {
  var promise = await http.put(apiEndPoint + "/" + id, item);
  return promise.data.Dathttpa;
};
