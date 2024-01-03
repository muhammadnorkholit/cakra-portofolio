import React from "react";
import Navbar from "../navbar/front/Navbar";
import Footer from "../Footer";

export default function FrontWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" flex flex-col justify-between">
      <div className="">
        <Navbar />
        {children}
      </div>
      <Footer />
    </main>
  );
}
