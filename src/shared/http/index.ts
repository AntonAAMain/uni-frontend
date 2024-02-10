import axios from "axios";

const path = "http://localhost:8000";

export const apiBase = axios.create({ baseURL: path });
