import { toast } from "react-toastify";

export function toastNotification(message: string,type: string = "success"){

    switch(type){
        case "error":
            toast.error(message)
            break;
        default:       
            toast.success(message)
    }
}

export function removeFromLocalStorage(elements: object = {}){
    console.log(elements);
}