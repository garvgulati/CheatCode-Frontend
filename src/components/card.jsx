import React from "react";

const Card = ({ children }) => {
    return (
        <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            {children}
        </div>
    );
};

export default Card;
