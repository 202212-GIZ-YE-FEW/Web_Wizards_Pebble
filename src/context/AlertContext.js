import { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const AlertContext = createContext({});

export const useAlertContext = () => useContext(AlertContext);
export const AlertContextProvider = (props) => {
    const { children } = props;
    const [theme, setTheme] = useState("default");
    const [message, setMessage] = useState("");

    const showToast = () => {
        toast(message, {
            onClose: () => {
                setMessage("");
            },
            type: theme === "default" ? "info" : theme,
            autoClose: 5000,
        });
    };

    useEffect(() => {
        if (message) {
            showToast();
        }
    }, [message, theme]);

    return (
        <AlertContext.Provider value={{ setTheme, setMessage }}>
            <ToastContainer position='top-right' />
            {children}
        </AlertContext.Provider>
    );
};
