import React from "react";

export default function Checkbox({ label, forInput, ...props }) {
    return (
        <div className="flex items-center gap-x-3">
            <input
                {...props}
                className="rounded select-none focus:ring-0 accent-purple-800"
            />
            <label htmlFor={forInput}>{label}</label>
        </div>
    );
}
