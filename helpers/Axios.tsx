import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://cakra.thecapz.com",
  timeout: 5000,
});
