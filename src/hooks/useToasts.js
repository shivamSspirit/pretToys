import { useCallback } from "react";
import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = useCallback((type, message) => {
    console.log('type',type,message)
    toast[type](message, {
      position: "top-right",
      autoClose:1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return { showToast };
};