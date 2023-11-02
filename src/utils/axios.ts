import axios, { Axios } from "axios";

export const clientAxios: Axios = axios.create({
  baseURL: "http://localhost:3000",
});
