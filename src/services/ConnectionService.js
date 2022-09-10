import axios from "axios";
const apiEndPoint = "http://192.168.253.28:5171/SetServerInfo/Set";

export const sendServerInfo = async (serverInfo) => {
  const promise = await axios.post(apiEndPoint, serverInfo);
  return promise.data.Data;
};
