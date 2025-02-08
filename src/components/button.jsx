import React from "react";

const Button = ({ onClick, children, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
