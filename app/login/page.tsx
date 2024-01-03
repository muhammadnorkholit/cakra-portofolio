"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";
import Loader from "../components/Loader";

export default function Login() {
  const [Loading, setLoading] = useState(false);
  const [BtnText, setBtnText] = useState("Login");
  const [Errors, setErrors] = useState({});
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  let route = useRouter();
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    setBtnText("Validation");
    setErrors({});

    let errors: any = {};

    if (Email == "" || Email == null) {
      errors.email = "Email tidak boleh kosong";
    }
    if (Password == "" || Password == null) {
      errors.password = "Password tidak boleh kosong";
    }
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      setBtnText("Login");
      setErrors(errors);
      return;
    }

    setTimeout(() => {
      route.push("/dashboard");
      setLoading(false);
      setBtnText("login successfully");
    }, 4000);
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-96">
        <CardHeader>
          <h1 className="font-bold text-xl">Login </h1>
          <p className="text-sm">Login to access Cakra dashboard</p>
        </CardHeader>
        <CardContent>
          <form action="" onSubmit={handleSubmit} method="post">
            <div className="form-group mb-2">
              <label htmlFor="" className="text-sm mb-1 inline-block">
                Email
              </label>
              <Input
                onKeyUp={(e: any) => setEmail(e.target.value)}
                type="email"
                className=" focus-visible:ring-0"
                placeholder="Enter your email"
              />
              <small className="text-rose-500"> {Errors.email ?? ""}</small>
            </div>
            <div className="form-group mb-4 ">
              <label htmlFor="" className="text-sm mb-1 inline-block">
                Password
              </label>
              <Input
                onKeyUp={(e: any) => setPassword(e.target.value)}
                type="password"
                className="focus-visible:ring-0"
                placeholder="Enter your password"
              />
              <small className="text-rose-500"> {Errors.password ?? ""}</small>
            </div>
            <Button disabled={Loading} className="w-full">
              {BtnText} {Loading && <Loader />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
