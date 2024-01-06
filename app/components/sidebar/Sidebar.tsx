"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type typeSidebar = {
  className: string;
};
export default function Sidebar({ className }: typeSidebar) {
  let path = usePathname();

  return (
    <aside className={className}>
      <ul className="flex flex-col gap-4">
        <li>
          <Link className="border-l-4 text-sm  block py-2 px-5" href={"/"}>
            <i className="mr-3 fa fa-home"></i>Landing Page
          </Link>
        </li>
        <hr />
        <li>
          <Link
            className={`${
              path == "/projects" ? "bg-slate-100  border-black " : ""
            } border-l-4 text-sm block py-2 px-5`}
            href={"/projects"}
          >
            <i className="mr-3 fa-solid fa-briefcase"></i>My Project
          </Link>
        </li>

        <li>
          <Link
            className={`${
              path == "/setting" ? "bg-slate-100  border-black " : ""
            } border-l-4 text-sm block py-2 px-5`}
            href={"/setting"}
          >
            <i className="mr-3 border-l-4 border-transparent fa-solid fa-gear"></i>
            Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}
