import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(function (config) {
  return config;
});

client.interceptors.response.use(
  (res) => {
    return res.data;
  },
  function (error) {
    console.error(error);
    return {
      statusCode: 500,
      message: 'Internal Server Error!',
      data: null,
    };
  }
);

export default client;
