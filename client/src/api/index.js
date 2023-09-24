import axios from "axios"; // là 1 thư viện giúp gọi 1 get api

const url = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${url}/post`);
export const createPost = (payload) => axios.post(`${url}/post`, payload);
export const updatePost = (payload) =>
  axios.post(`${url}/post/update`, payload);
