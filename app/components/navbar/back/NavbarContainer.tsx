"use server";
import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { cookies } from "next/headers";

export default async function NavbarContainer() {
  let cookie = cookies();
  let name = "";
  // if (cookie.has("auth")) {
  //   const authCookie = cookie.get("auth")?.value;
  //   if (authCookie) {
  //     try {
  //       const parsedData = JSON.parse(authCookie);
  //       name = parsedData.name || "";
  //     } catch (error) {
  //       console.error("Error parsing JSON:", error);
  //     }
  //   }
  // }
  //   let nama = await fetch("http://localhost:3000/api/cookie");
  //   let res = await nama.json();
  return <Navbar name={name} />;
}
