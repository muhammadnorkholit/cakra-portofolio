"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

export default function Navbar({ name }: { name: string }) {
  const [Show, setShow] = useState(false);
  return (
    <div className="  py-3 px-8 shadow-sm ">
      <div className=" items-center  flex justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold">Cakra</h1>
        </div>
        <Button className="md:hidden " onClick={() => setShow(!Show)}>
          <i className="fa fa-bars"></i>
        </Button>
        <div className="menu desktop hidden md:block">
          <ul className="flex items-center gap-4">
            <NavItem title={name} link="/" />
          </ul>
        </div>
        <aside
          className={`menu ${
            Show ? "left-0 opacity-100" : "left-[-100%] opacity-0"
          } mobile w-full h-full top-0 transition-all duration-500 bg-white  left-0 py-16 md:hidden fixed block`}
        >
          <Button
            variant={"outline"}
            onClick={() => setShow(!Show)}
            className="absolute right-5 top-5"
          >
            <i className="fa fa-close"></i>
          </Button>
          <ul className="flex flex-col gap-4">
            <li>
              <Link className="border-l-4 text-sm  block py-2 px-5" href={"/"}>
                <i className="mr-3 fa fa-home"></i>Landing Page
              </Link>
            </li>
            <li>
              <Link
                className="border-l-4 bg-slate-100 block py-2 border-black px-5"
                href={"/projects"}
              >
                <i className="mr-3 fa-solid fa-briefcase"></i>My Project
              </Link>
            </li>
            <li>
              <Link
                className="px-5 block border-l-4 border-transparent"
                href={"/setting"}
              >
                {" "}
                <i className="mr-3  fa-solid fa-gear"></i>
                Setting
              </Link>
            </li>
            <li>
              <Link
                className="px-5 border-l-4 border-transparent block"
                href={"/logout"}
              >
                <i className=" mr-2 fa-solid fa-arrow-right-from-bracket"></i>{" "}
                Logout
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
