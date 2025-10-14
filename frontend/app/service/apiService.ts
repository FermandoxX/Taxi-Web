import { toastNotification } from "~/utils/helpers";
import api from "../config/axios";

export async function postRequest(url: string, data: object) {
  try {
    const response = await api.post(url, data);
    toastNotification(response.data.message);

    return response.data;
  } catch (e: any) {
    const errorData = e.response?.data || { message: "Unexpected error" };
    const errorMessage = errorData?.response?.[0] ?? errorData.message;

    toastNotification(errorMessage, "error");
    return errorData;
  }
}

export async function getRequest(url: string) {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (e: any) {
    const errorData = e.response?.data || { message: "Unexpected error" };
    toastNotification(errorData.message, "error");
    return errorData;
  }
}
