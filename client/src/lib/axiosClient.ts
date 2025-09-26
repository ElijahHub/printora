import axios from "axios";
import { STRAPI_API_TOKEN } from "@/config";

export const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  },
});
