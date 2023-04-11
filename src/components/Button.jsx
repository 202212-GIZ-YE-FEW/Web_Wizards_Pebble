import React from "react";

function Button({
    classes,
    children,
    handleClick = () => {},
    ariaLabel,
    dropDownButton = null,
}) {
    // console.log(classes);
    return (
        <>
            {dropDownButton === null ? (
                <button
                    onClick={() => handleClick(children)}
                    className={`button ${classes}`}
                >
                    {children}
                </button>
            ) : (
                <button
                    onClick={() => handleClick(children)}
                    className={`button ${classes}`}
                    aria-label={ariaLabel}
                    data-te-offcanvas-toggle
                    data-te-target={dropDownButton.target}
                    aria-controls={dropDownButton.controls}
                    data-te-ripple-init
                    data-te-ripple-color='dark'
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;
