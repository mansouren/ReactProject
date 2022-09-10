import http from "./httpService";

// http://192.168.50.5/SwitchConfig/api/EntityID

const apiEndPoint = "/EntityID";

export const getAllItems = async () => {
  const Promise = await http.get(apiEndPoint);
  return Promise.data.Data;
};

export const addItem = async (item) => {
  const promise = await http.post(apiEndPoint, item);
  return promise.data.Data;
};

export const UpdateItem = async (item, id) => {
  const promise = await http.put(apiEndPoint + "/" + id, item);
  return promise.data.Data;
};
