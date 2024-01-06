import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Delete from "@/app/projects/Delete";
import Link from "next/link";
type typeCard = {
  title?: string;
  desc?: string;
  date?: string;
  id: number;
};
export default function CardProject({ title, desc, date, id }: typeCard) {
  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2  flex-row justify-between">
        <h1 className="font-bold">{title}</h1>
        <div className="">
          <div className="">
            <Link href={"/projects/" + id}>
              {" "}
              <i className="fa fa-pencil mr-2"></i>
            </Link>
            <Delete id={id}>
              <i className="fa text-rose-500 fa-trash mr-2"></i>
            </Delete>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm ">{desc}</p>
        <small className="mt-4 inline-block mr-5">
          <i className="fa fa-clock mr-2" />
          {date}
        </small>
        <small className="mt-1 inline-block">
          <i className="fa-brands fa-github mr-2" />
          muhammadnorkholit
        </small>{" "}
      </CardContent>
    </Card>
  );
}
