"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";

type typeCard = {
  title: string;
  desc: string;
  img: string;
  date: string;
};
export default function CardProject({ title, desc, img, date }: typeCard) {
  const [Preview, setPreview] = useState(false);
  return (
    <Card className="hover:shadow-lg  shadow-none  transition-all duration-300">
      <CardContent className="p-3">
        <figure className="mb-2 relative group">
          <Image
            alt="example"
            src={img}
            width={100}
            height={100}
            layout="responsive"
            className="aspect-[3/2] bg-slate-900 object-cover rounded-sm"
          />
          <div
            onClick={() => setPreview(!Preview)}
            className="aspect-[3/2] cursor-pointer bg-slate-900/40 absolute w-full md:group-hover:opacity-100 opacity-0 transition-all duration-300 h-full top-0 left-0 text-white flex items-center justify-center"
          >
            <i className="fa fa-eye"></i>
          </div>
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
        <div
          onClick={() => setPreview(!Preview)}
          className={`fixed z-50 ${
            Preview
              ? "md:opacity-100 md:visible invisible opacity-0"
              : "invisible opacity-0"
          } top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 bg-slate-900/50`}
        >
          <Image
            alt="example"
            src={img}
            width={900}
            height={600}
            className="aspect-[3/2] w-[50%] h-[70vh] bg-slate-900 object-cover rounded-sm"
          />
        </div>
      </CardContent>
    </Card>
  );
}
