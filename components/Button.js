import React from "react";

export default function Button({children, className, ...props}) {
    return (
        <button {...props} className={`${className ? className: 'bg-blue-800 hover:bg-blue-900' }  font-medium transition duration-500  rounded-xl py-2.5 px-6 text-white`}>
            {children}
        </button>
    );
}
