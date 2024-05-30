import axios from "axios";

const API_INSTANCE = axios.create({
	baseURL: "https://farmacristo.onrender.com/api",
});

export { API_INSTANCE };
