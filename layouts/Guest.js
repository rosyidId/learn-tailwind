import Head from "next/head";
import React from "react";

export default function Guest({ header, title, children }) {
    return (
        <div className="flex items-center justify-center min-h-screen antialiased tracking-tighter text-gray-800 bg-gray-300">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="w-1/3">
                <div className="p-6 bg-white shadow rounded-2xl">
                    <div className="mb-3">
                        <h1 className="text-xl font-medium uppercase">{header}</h1>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
