import React from "react";
import Button from "../components/Button";
import Guest from "../layouts/Guest";

export default function Login() {
    return (
        <div>
            <h1 className="text-2xl font-light uppercase ">Login</h1>
            <form>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input className="w-full px-4 py-2 transition duration-300 border shadow outline-none focus:ring rounded-xl" type="text" name="email" id="email" />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                    <input className="w-full px-4 py-2 transition duration-300 border shadow outline-none focus:ring rounded-xl" type="password" name="password" id="password" />
                </div>
                <div className="flex justify-between mb-5">
                    <div >
                        <input className="mr-2 accent-purple-800" type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                        <a href="#">Forget Password</a>
                </div>
                <Button>Login</Button>
            </form>
        </div>
    );
}

Login.getLayout = (page) => <Guest children={page} />;
