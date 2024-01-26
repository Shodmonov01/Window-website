import { toast, Slide } from "react-toastify";

const toastContent = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide
}

export const getToast = (val) => {
    toast.success(val, toastContent);
}

export const getToastWarn = (val) => {
    toast.warn(val, toastContent);
}

export const portalElement = document.querySelector('#modal');