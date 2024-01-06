import React from "react";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
export default function NavbarContainer() {
  let cookie = cookies();
  let auth = cookie.has("auth");

  return <Navbar dataAuth={auth} />;
}
