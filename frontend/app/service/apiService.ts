import api from '../config/axios';
import { toast } from "react-toastify";

interface Post {
    url:string;
    data:object;
}

export async function postRequest({ url,data }: Post) {
    try {
        const response = await api.post(url,data)

        toast.success("Login success");

        return response.data
    } catch (e: any) {
        if (e.response) {
            toast.error("Login failed: " + e.response);
        } else {
            toast.error("Unexpected error: " + + e.response);
        }
    }
}