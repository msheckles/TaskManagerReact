import axios from "axios";

axios.defaults.headers.common.Authorization = "token injaaa";

const getRequest = axios.get;

const postRequest = axios.post;

const putRequest = axios.put;

const deleteRequest = axios.delete;

export { getRequest, postRequest, putRequest, deleteRequest };
