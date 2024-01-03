import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type typeItem = {
  title?: string;
  link: string;
  children?: React.ReactNode;
};
export default function NavItem({ title, link, children }: typeItem) {
  return (
    <li className="cursor-pointer transition-all duration-300 text-sm text-slate-800  underline-offset-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none px-4">
          {title} <i className="fa fa-user ml-2 text-lg"></i>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <i className=" mr-2 fa-solid fa-arrow-right-from-bracket"></i>
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}
