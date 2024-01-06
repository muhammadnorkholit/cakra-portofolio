import React from "react";

import { Metadata } from "next";
import Form from "./form";

export const metadata: Metadata = {
  title: "Login",
  description: "Website portofolio by cakra",
};

export default function Login() {
  return <Form />;
}
