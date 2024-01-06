import React from "react";
import Footer from "../Footer";
import NavbarContainer from "../navbar/front/NavbarContainer";

export default function FrontWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" flex flex-col justify-between">
      <div className="">
        <NavbarContainer />
        {children}
      </div>
      <Footer />
    </main>
  );
}
