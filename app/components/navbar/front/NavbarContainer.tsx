import React from "react";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
export default function NavbarContainer() {
  let cookie = cookies();
  let name = "";
  if (cookie.has("auth")) {
    const authCookie = cookie.get("auth")?.value;
    if (authCookie) {
      try {
        const parsedData = JSON.parse(authCookie);
        name = parsedData.name || "";
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }
  return <Navbar dataAuth={name} />;
}
