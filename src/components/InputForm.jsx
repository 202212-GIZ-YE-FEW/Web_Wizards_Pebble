import { Input } from "react-flatifycss";

import "flatifycss/dist/css/flatify-min.css";
import styles from "./InputForm.module.css";
const InputForm = ({
    type,
    placeholder,
    label,
    name,
    hasFloatingLabel,
    togglePasswordLabel,
    togglePassword,
    width,
}) => {
    const InputWidth = width ? `w-${width}` : "w-full";

    return (
        <div className={`px-3 mb-3 ${InputWidth} `}>
            <Input
                autoFocus
                hasFloatingLabel={hasFloatingLabel}
                label={label}
                name={name}
                placeholder={placeholder}
                type={type}
                className={styles.InputForm}
                togglePassword={togglePassword}
                togglePasswordLabel={togglePasswordLabel}
            />
        </div>
    );
};

export default InputForm;
