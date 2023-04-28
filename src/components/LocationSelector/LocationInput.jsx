import React from "react";
// import { useTranslation } from "react-i18next";
const Input = ({
    placeholder,
    value,
    onChange,
    inputRef,
    name,
    id,
    className = "!rounded-md !border-2 !border-black-100 p-2 !bg-white",
    type = "text",
}) => {
    // const { t } = useTranslation("locationSelector");

    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
            ref={inputRef}
        />
    );
};

export default Input;
