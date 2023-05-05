import { createContext, useContext, useState } from "react";
import { Alert, AlertCloseButton } from "react-flatifycss";

export const AlertContext = createContext({});

export const useAlertContext = () => useContext(AlertContext);

export const AlertContextProvider = (props) => {
    const { children } = props;
    const [theme, setTheme] = useState("default");
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <AlertContext.Provider value={{ setTheme, setShow, setMessage }}>
            <Alert theme={theme} show={show} className='text-lg text-center'>
                <AlertCloseButton
                    label='Close the alert'
                    onClick={() => {
                        setShow(false);
                    }}
                    theme={theme}
                />
                {message}
            </Alert>
            {children}
        </AlertContext.Provider>
    );
};
