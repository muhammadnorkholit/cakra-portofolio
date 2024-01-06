import React from "react";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
export default function NavbarContainer() {
  let cookie = cookies();
  let name = JSON.parse(cookie.get("auth")?.value || "")?.name || "";
  return <Navbar dataAuth={name} />;
}
