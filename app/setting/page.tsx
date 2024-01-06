import React from "react";
import BackWrapper from "../components/layout/backWrapper";
import Form from "./form";
import { Metadata } from "next";
import { axios } from "@/helpers/Axios";
import notFound from "../not-found";

export const metadata: Metadata = {
  title: "Cakra Portofolio - Settings",
  description: "Website portofolio by cakra",
};

const fetchData = async () => {
  try {
    let data = await axios("/settings");
    let array = data.data;
    if (typeof array[0] !== "undefined") return array[0];
    return undefined;
  } catch (error: any) {
    const { status } = error.response;
    if (status === 404) notFound();
  }
};
export default async function page() {
  let data = await fetchData();
  return (
    <BackWrapper>
      <h1 className="font-bold text-xl mb-4">Setting Website</h1>
      <Form data={data} />
    </BackWrapper>
  );
}
