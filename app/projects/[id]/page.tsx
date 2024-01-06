import { Metadata } from "next";
import Form from "./Form";
import { notFound } from "next/navigation";
import { axios } from "@/helpers/Axios";
import BackWrapper from "../../components/layout/backWrapper";

export const metadata: Metadata = {
  title: "Cakra Portofolio - Update Project",
  description: "Website portofolio by cakra",
};
const fetchData = async (id: number) => {
  try {
    let data = await axios("/projects/" + id);
    return data.data;
  } catch (error: any) {
    const { status } = error.response;
    if (status === 404) notFound();
  }
};

export default async function EditProject({ params }: any) {
  let { id } = params;
  let project = await fetchData(id);

  return (
    <BackWrapper>
      <Form data={project} />
    </BackWrapper>
  );
}
