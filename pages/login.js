import React, {useState} from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Guest from "../layouts/Guest";
import Link from "next/link";

export default function Login() {
    const [isEmail, setemail] = useState('');
    const [isPassword, setPassword] = useState('');


    return (
        <div>
            <form>
                <div className="mb-5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        placeholder="xxxxx@gmail.com"
                        type="email"
                        required
                        name="email"
                        id="email"
                    />
                </div>
                <div className="mb-5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        placeholder="Password"
                        type="password"
                        required
                        name="password"
                        id="password"
                    />
                </div>
                <div className="flex justify-between mb-5">
                    <div>
                        <Checkbox
                            forInput="remember"
                            label="Remember Me"
                            type="checkbox"
                            name="remember"
                            id="remember"
                        />
                    </div>
                    <a href="#">Forget Password</a>
                </div>
                <div className="flex items-center justify-between">
                    <Button>Login</Button>
                    <span>
                        Jika belum punya akun ?{" "}
                        <Link href="/register">
                            <a className="font-medium text-blue-700">
                                register
                            </a>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

Login.getLayout = (page) => (
    <Guest title="login" header="Login" children={page} />
);
