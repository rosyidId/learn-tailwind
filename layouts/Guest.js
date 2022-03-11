import React from "react";

export default function Guest({ children }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <div className="w-1/3">
                <div className="p-6 bg-white shadow rounded-2xl">
                    {children}
                </div>
            </div>
        </div>
    );
}
