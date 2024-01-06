import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="flex relative items-center flex-col justify-center min-h-screen">
      <h1 className="text-[50vh]  pointer-events-none  leading-[20rem] font-bold">
        404
      </h1>
      <p>Oops, something went wrong.</p>
      <p className="mb-2">Sorry , we couldn't find your page</p>
      <Link href={"/projects"}>
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
