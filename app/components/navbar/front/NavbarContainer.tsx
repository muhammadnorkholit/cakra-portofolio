import React from "react";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
export default function NavbarContainer() {
  let cookie = cookies();
<<<<<<< HEAD
  let auth = cookie.has("auth");

  return <Navbar dataAuth={auth} />;
=======
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
  return <Navbar dataAuth={name} />;
>>>>>>> 583c7a7291f24ab755467a68b350dff6352836a6
}
