import { toast } from 'react-toastify';

export const successMsg = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
})

export const errorMsg = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
})