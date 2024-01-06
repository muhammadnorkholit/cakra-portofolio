import React from "react";
import BackWrapper from "../components/layout/backWrapper";
import { axios } from "@/helpers/Axios";
import CardProject from "../components/card-project/back/CardProject";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cakra Portofolio - Dashboard",
  description: "Website portofolio by cakra",
};

const fetchData = async () => {
  try {
    let data = await axios("/projects?_sort=id&_order=desc");
    return data.data;
  } catch (error) {
    return [];
  }
};
export default async function Dashboard({ searchParams }: any) {
  let loading = true;
  let Projects = await fetchData();
  loading = false;
  let Grid = searchParams?.grid || "vertical";

  return (
    <BackWrapper>
      <Header count={Projects.length} />

      <div
        className={`${
          Projects.length == 0
            ? "flex items-center justify-center"
            : `grid  ${
                Grid == "horizontal"
                  ? "grid-cols-1"
                  : "md:grid-cols-2 grid-cols-1"
              } gap-5`
        }`}
      >
        {Projects.length == 0 && !loading && (
          <div className="text-center ">
            <Image
              src={"/images/empty-data.jpg"}
              width={400}
              height={400}
              alt="empty image"
            />
            <h3 className="text-slate-600"> No projects created</h3>{" "}
            <p className="text-slate-600">
              lets start adding the first project
            </p>
            <Link href={"/projects/new-project"}>
              <Button variant={"outline"} className="mt-3">
                <i className="fa fa-plus mr-2"></i> Create New Project
              </Button>
            </Link>
          </div>
        )}
        {Projects?.map((d: any, i: number) => {
          return (
            <CardProject
              id={d.id}
              key={i}
              date={d.date}
              title={d?.title}
              desc={d?.desc}
            />
          );
        })}
      </div>
    </BackWrapper>
  );
}
