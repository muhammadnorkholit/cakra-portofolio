"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  const [Show, setShow] = useState(false);
  return (
    <div className="flex container items-center py-7 justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold">Cakra</h1>
      </div>
      <Button className="md:hidden " onClick={() => setShow(!Show)}>
        <i className="fa fa-bars"></i>
      </Button>
      <div className="menu desktop hidden md:block">
        <ul className="flex items-center gap-4">
          <NavItem title="Home" link="/" />
          <NavItem title="Project" link="/" />
          <NavItem link="/">
            <a href="https://github.com/muhammadnorkholit">
              <Button variant={"outline"}>
                <i className="fa-brands fa-github mr-2"></i> github
              </Button>
            </a>
          </NavItem>
        </ul>
      </div>
      <div
        className={`menu ${
          Show ? "top-0 opacity-100" : "top-[-100%] opacity-0"
        } mobile w-full h-full transition-all duration-500 bg-slate-950  left-0 py-16 md:hidden fixed block`}
      >
        <Button
          variant={"outline"}
          onClick={() => setShow(!Show)}
          className="absolute right-5 top-5"
        >
          <i className="fa fa-close"></i>
        </Button>
        <ul className="flex flex-col items-center gap-8">
          <li className="cursor-pointer text-base text-slate-200 ">Home</li>
          <li className="cursor-pointer text-base text-slate-200 ">Project</li>
          <li className="cursor-pointer text-base text-slate-200 ">
            <i className="fa-brands fa-github text-lg"></i> github
          </li>
        </ul>
      </div>
    </div>
  );
}
