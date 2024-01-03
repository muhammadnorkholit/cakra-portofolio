"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Header({ count }: { count: number }) {
  const [Grid, setGrid] = useState("horizontal");
  const router = useRouter();
  const handleGrid = (direction: string) => {
    setGrid(direction);
    router.push("/dashboard?grid=" + direction);
  };
  return (
    <div className="flex justify-between">
      <h3>{count} Projects</h3>{" "}
      <div className="flex gap-2">
        <Button
          className="hidden md:inline-block"
          onClick={() => handleGrid("vertical")}
          variant={Grid == "vertical" ? "secondary" : "ghost"}
        >
          <i className="fa-solid fa-grip"></i>{" "}
        </Button>
        <Button
          className="hidden md:inline-block"
          onClick={() => handleGrid("horizontal")}
          variant={Grid == "horizontal" ? "secondary" : "ghost"}
        >
          <i className="fa-solid fa-grip-vertical"></i>
        </Button>
        <Link href={"/new-project"}>
          <Button variant={"default"} className="mb-5">
            <i className="fa fa-plus mr-2"></i> New Project
          </Button>
        </Link>
      </div>
    </div>
  );
}
