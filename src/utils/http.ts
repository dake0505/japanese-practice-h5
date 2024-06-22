import axios from 'axios';

 const apiUrl = import.meta.env.VITE_API_URL;

const http = axios.create({
  baseURL: apiUrl ? `${apiUrl}/api` : '/api', // 你的API地址
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么：例如添加token
    config.headers['Authorization'] = localStorage.getItem("Authorization");
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.response_key !== 'SUCCESS') {
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    console.log('err' + error);
    return Promise.reject(error);
  },
);

export default http;
