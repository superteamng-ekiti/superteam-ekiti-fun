import { API_URL } from "@/constant";
import axios from "axios";

export const api = axios.create({
  baseURL: API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
