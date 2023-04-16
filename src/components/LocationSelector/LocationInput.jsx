import React from "react";
import { useTranslation } from "react-i18next";
const Input = ({ placeholder, value, onChange, inputRef }) => {
    const { t } = useTranslation("locationSelector");

    const inputStyles = {
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",

        height: "48px",
        borderColor: "#000000",
        borderWidth: "2px",
        padding: "10px",
        fontSize: "14px",
        fontFamily: "Rubik",
        outline: "none",
        boxShadow: "none",
    };

    return (
        <input
            id='location'
            type='text'
            placeholder={placeholder || t("locationPlaceholder")}
            value={value}
            onChange={onChange}
            className='w-full border border-gray-400 rounded-lg py-2 px-4 text-sm font-rubik'
            style={inputStyles}
            ref={inputRef}
        />
    );
};

export default Input;
