import api from '../config/axios';
import { toast } from "react-toastify";

interface Post {
    url: string;
    data: object;
}

export async function postRequest({ url, data }: Post) {
    try {
        const response = await api.post(url, data)
        toast.success(response.data.message);

        return response.data;
    } catch (e: any) {
        const errorData = e.response?.data || { message: "Unexpected error" };
        toast.error(errorData.message);
        return errorData;
    }
}
