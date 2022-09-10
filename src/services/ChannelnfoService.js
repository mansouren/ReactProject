import http from "./httpService";

const apiEndPoint = "/ChannelInfo";

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
