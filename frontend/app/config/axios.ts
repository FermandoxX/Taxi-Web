import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { "Content-Type": "application/json" }
});

export function setupInterceptors() {
    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("access_token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;

        },
        (error) => Promise.reject(error)
    );

    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                // try {
                // const refreshToken = localStorage.getItem("refresh_token");
                // const { data } = await axios.post(
                //     import.meta.env.VITE_API_URL + "/refresh",
                //     { refresh_token: refreshToken }
                // );

                // localStorage.setItem("access_token", data.access_token);
                // originalRequest.headers.Authorization = `Bearer ${data.access_token}`;

                // } catch (e) {

                localStorage.removeItem("access_token");
                // localStorage.removeItem("refresh_token");
                window.location.href = "/sign-in";
                // }
            }

            return Promise.reject(error);
        }
    )
}

export default api;
