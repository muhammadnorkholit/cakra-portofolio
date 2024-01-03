"use client";
import React, { SyntheticEvent, useState } from "react";
import BackWrapper from "../components/layout/backWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Loader from "../components/Loader";
import { axios } from "@/helpers/Axios";
import Image from "next/image";
const moment = require("moment");
require("moment/locale/id");
export default function NewProject() {
  const [Preview, setPreview] = useState("");
  const [Loading, setLoading] = useState(false);
  const [BtnText, setBtnText] = useState("Save Project");
  const [ImagePrev, setImagePrev] = useState("");
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
      const img = ImagePrev;

      await axios.post("/projects", {
        title,
        desc,
        img,
        date: formattedDate,
      });
      setTimeout(() => {
        setLoading(false);
        route.push("/dashboard");
        toast({
          className: "bg-emerald-500 text-white  ",
          title: "Notification ",
          description: "Successfully add new project",
        });
      }, 4000);
    } catch (error) {}
  };
  return (
    <BackWrapper>
      <h1 className="text-xl   font-bold mb-5">Add New Project</h1>

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
                      setImagePrev(reader.result);
                    };
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
