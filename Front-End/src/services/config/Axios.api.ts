import axios from "axios";

const API_INSTANCE = axios.create({
	baseURL: "http://localhost:8008/api",
});

export { API_INSTANCE };
