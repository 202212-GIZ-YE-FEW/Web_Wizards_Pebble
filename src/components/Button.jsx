import React from "react";

function Button({ classes, children, handleClick }) {
    // console.log(classes);
    return (
        <button
            onClick={() => handleClick(children)}
            className={`button ${classes}`}
        >
            {children}
        </button>
    );
}

export default Button;
