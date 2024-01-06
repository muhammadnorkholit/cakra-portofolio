"use client";
import React, { SyntheticEvent, useState } from "react";
import BackWrapper from "../../components/layout/backWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Loader from "../../components/Loader";
import { axios } from "@/helpers/Axios";
import Image from "next/image";
import Link from "next/link";
const moment = require("moment");
require("moment/locale/id");

export default function Form() {
  const [Preview, setPreview] = useState("");
  const [Loading, setLoading] = useState(false);
  const [BtnText, setBtnText] = useState("Save Project");
  const [ImageFile, setImageFile] = useState("");
  const { toast } = useToast();

  let route = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      const currentDate = moment();
      const formattedDate = currentDate
        .locale("id")
        .format("dddd, D MMMM YYYY");

      e.preventDefault();
      setLoading(true);
      setBtnText("Saving");
      const target: any = e.target;
      const title = target?.title.value;
      const desc = target?.desc.value;
      const img = ImageFile;
      const formData = new FormData();
      formData.append("file", img);
      let imageName = await fetch(`${process.env.API_LOCAL}/upload`, {
        method: "POST",
        body: formData,
      });
      const fileName = await imageName.json();

      await axios.post("/projects/", {
        title,
        desc,
        img: fileName,
        date: formattedDate,
      });
      setTimeout(() => {
        setLoading(false);
        route.push("/projects");
        route.refresh();
        toast({
          className: "bg-emerald-500 text-white  ",
          title: "Notification ",
          description: "Successfully update  project",
        });
      }, 4000);
    } catch (error) {
      toast({
        className: "bg-rose-500 text-white  ",
        title: "Notification ",
        description: "Failed update  project",
      });
    }
  };
  return (
    <BackWrapper>
      <h1 className="text-xl   font-bold mb-5">Create Project</h1>
      <Link href={"/projects"}>
        <Button variant={"outline"} className="group mb-6">
          <i className="fa fa-arrow-left transition-all duration-300 mr-2 group-hover:-translate-x-1"></i>
          Back
        </Button>
      </Link>
      <form
        action=""
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
          <div className="form-group mb-2 col-span-2 ">
            <label htmlFor="" className="text-sm block mb-2">
              Image
            </label>

            <label className="block  ">
              <div
                className={`bg-slate-100 relative ${
                  !Preview && " border-dashed border-4"
                } border-slate-400 w-full  h-80 rounded-sm overflow-hidden flex flex-col items-center justify-center`}
              >
                <i className="text-9xl text-slate-400 fa-solid fa-cloud-arrow-down"></i>{" "}
                <h3>
                  <strong>Choose a file</strong> or drag it here
                </h3>
                {Preview && (
                  <Image
                    objectFit="cover"
                    src={Preview}
                    alt="preview image"
                    fill
                  />
                )}
              </div>
              <Input
                name="image"
                type="file"
                accept="images/*"
                onChange={(e: any) => {
                  if (e.target.files[0]) {
                    const data = e.target.files[0];
                    const reader: any = new FileReader();
                    reader.onload = () => {
                      setPreview(reader.result);
                    };
                    setImageFile(data);
                    reader.readAsDataURL(data);
                  }
                }}
                className="hidden"
              />
            </label>
          </div>
          <div className="col-span-3">
            <div className="form-group mb-2">
              <label htmlFor="" className="text-sm inline-block mb-2">
                Title
              </label>
              <Input
                name="title"
                type="text"
                placeholder="Enter project title"
                className="focus-visible:ring-0"
              />
            </div>
            <div className="form-group mb-2 ">
              <label htmlFor="" className="text-sm inline-block mb-2">
                Description
              </label>
              <Textarea
                name="desc"
                placeholder="Enter project description"
                className="focus-visible:ring-0"
              />
            </div>
            <Button className="mt-4" disabled={Loading}>
              {BtnText} {Loading && <Loader />}
            </Button>
          </div>
        </div>
      </form>
    </BackWrapper>
  );
}
