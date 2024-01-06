"use server";
import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { cookies } from "next/headers";

export default async function NavbarContainer() {
  let cookie = cookies();
  let name = JSON.parse(cookie.get("auth")?.value || "")?.name || "";

  //   let nama = await fetch("http://localhost:3000/api/cookie");
  //   let res = await nama.json();
  return <Navbar name={name} />;
}
