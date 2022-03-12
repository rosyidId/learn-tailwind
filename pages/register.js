import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import Guest from "../layouts/Guest";

export default function Register() {
    return (
        <div>
            <form>
                <div className="mb-5">
                    <Label htmlFor="nama">Nama</Label>
                    <Input placeholder="Jhon Dea" name="nama" id="nama" />
                </div>
                <div className="mb-5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        placeholder="xxxxx@gmail.com"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                    <div className="mb-5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="password_confirmation">
                            Confirm Password
                        </Label>
                        <Input
                            placeholder="Confirm Password"
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                        />
                    </div>
                </div>
                <div className="mb-5">
                    <Label forInput="gender">GENDER</Label>
                    <Select>
                        <option value="mele">Laki-Laki</option>
                        <option value="femele">Perempuan</option>
                    </Select>
                </div>
                <div className="flex justify-between mb-5">
                    <Checkbox
                        forInput="acceptance"
                        label={"Agree your Privacy and Terms"}
                        type="checkbox"
                        name="acceptance"
                        id="acceptance"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Button>Register</Button>
                    <span>
                        Jika Anda Sudah Punya Akun ? {""}
                        <Link href="/login">
                            <a className="font-medium text-blue-700">login</a>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

Register.getLayout = (page) => (
    <Guest title="Register" header="Register" children={page} />
);
