import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {
    "Cache-Control": "no-store", // Set cache ke 'no-store' untuk mengabaikan cache
  },
  //   headers: { "X-Custom-Header": "foobar" },
});
