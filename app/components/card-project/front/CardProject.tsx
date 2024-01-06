import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type typeCard = {
  title: string;
  desc: string;
  img: string;
  date: string;
};
export default function CardProject({ title, desc, img, date }: typeCard) {
  return (
    <Card className="hover:shadow-lg  shadow-none  transition-all duration-300">
      <CardContent className="p-3">
        <figure className="mb-2">
          <Image
            alt="example"
            src={img}
            width={100}
            height={100}
            layout="responsive"
            className="aspect-[3/2] bg-slate-900 object-cover rounded-sm"
          />
        </figure>
        <h5 className="text-lg capitalize font-medium">{title}</h5>
        <p className="text-sm text-slate-600">{desc}</p>
        <small className="mt-4 block">
          <i className="fa fa-clock mr-2" />
          {date}
        </small>
        <small className="mt-1 block">
          <i className="fa-brands fa-github mr-2" />
          muhammadnorkholit
        </small>
      </CardContent>
    </Card>
  );
}
