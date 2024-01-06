import Link from "next/link";
import React from "react";

type typeItem = {
  title?: string;
  link: string;
  children?: React.ReactNode;
  props?: any;
};
export default function NavItem({ title, link, children, ...props }: typeItem) {
  return (
    <li className="cursor-pointer transition-all duration-300 hover:font-bold text-base text-slate-800 hover:underline underline-offset-4">
      <Link href={link} {...props}>
        {title}
        {children}
      </Link>
    </li>
  );
}
