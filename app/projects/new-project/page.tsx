import React from "react";
import Form from "./Form";
import { Metadata } from "next";
import BackWrapper from "../../components/layout/backWrapper";

export const metadata: Metadata = {
  title: "Cakra Portofolio - Create Project",
  description: "Website portofolio by cakra",
};
export default function NewProject() {
  return (
    <BackWrapper>
      <Form />
    </BackWrapper>
  );
}
