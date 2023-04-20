import { useState } from "react";
import { Input } from "react-flatifycss";

import { PASSWORD_REGEXP } from "@/util";

/**
 * @param {string} password
 */
function handlePasswordChange(password, setState) {
    if (!password) {
        setState("default");
        return;
    }
    const testPassword = PASSWORD_REGEXP.test(password);
    setState(testPassword ? "valid" : "invalid");
}

const InputForm = (props) => {
    const {
        type,
        placeholder,
        label,
        hasFloatingLabel,
        togglePasswordLabel,
        togglePassword,
        width,
        id,
        name,
        autoFocus,
        isRequired = false,
        passwordCriteria,
    } = props;
    const InputWidth = width ? `w-${width}` : "w-full";
    const [state, setState] = useState("default");
    return (
        <div className={`px-3 mb-3 ${InputWidth} `}>
            <Input
                autoFocus={autoFocus}
                hasFloatingLabel={hasFloatingLabel}
                label={label}
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                required={isRequired}
                className='!bg-white !border-2 !border-[black] !rounded-lg !shadow-none focus:[&:not(#password)]:!border-[3px] focus:[&:not(#password)]:!border-[black] focus:ring-0'
                togglePassword={togglePassword}
                togglePasswordLabel={togglePasswordLabel}
                state={togglePassword ? state : null}
                // Using slice to remove the first "\" and last "\".
                pattern={
                    togglePassword ? `${PASSWORD_REGEXP}`.slice(1, -1) : null
                }
                onChange={(password) => {
                    handlePasswordChange(password, setState);
                }}
            />
            {togglePassword && <p className='italic'>{passwordCriteria}</p>}
        </div>
    );
};

export default InputForm;
