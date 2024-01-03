import Link from "next/link";
import React from "react";

type typeSidebar = {
  className: string;
};
export default function Sidebar({ className }: typeSidebar) {
  return (
    <aside className={className}>
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            className="border-l-4 bg-slate-100 block py-2 border-black px-5"
            href={"/dashboard"}
          >
            <i className="mr-3 fa-solid fa-briefcase"></i>My Project
          </Link>
        </li>
        <li>
          <Link className="px-5 block" href={"/pengaturan"}>
            {" "}
            <i className="mr-3 border-l-4 border-transparent fa-solid fa-gear"></i>
            Pengaturan
          </Link>
        </li>
      </ul>
    </aside>
  );
}
