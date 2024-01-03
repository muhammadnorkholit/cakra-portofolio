import React from "react";
import Navbar from "../navbar/back/Navbar";
import Footer from "../Footer";
import Sidebar from "../sidebar/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function BackWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" flex min-h-[100vh] flex-col ">
      <Navbar />
      <div className="grid grid-cols-6 min-h-[91vh]">
        <Sidebar className="border-r-2 border-slate-100 md:block hidden col-span-1 min-h-full py-4" />
        <div className="md:col-span-5 col-span-6  p-7">{children}</div>
        <Toaster />
      </div>
    </main>
  );
}
