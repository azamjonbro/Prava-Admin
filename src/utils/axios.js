import axios from "axios";

// Asosiy instance yaratamiz
const api = axios.create({
  baseURL: "https://prava.safonon.uz", // Asosiy API manzilingiz
  timeout: 5000, // 5 soniya timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Har bir so‘rovdan oldin ishlaydi)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Har bir javobdan keyin ishlaydi)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized – token eskirgan yoki noto‘g‘ri");
      // logout yoki boshqa harakatlar shu yerda bo‘lishi mumkin
    }
    return Promise.reject(error);
  }
);

export default api;
