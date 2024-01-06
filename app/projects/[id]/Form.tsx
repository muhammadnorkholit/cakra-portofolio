"use client";
import React, { SyntheticEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Loader from "../../components/Loader";
import { axios } from "@/helpers/Axios";
import Image from "next/image";
import Link from "next/link";
import { UploadButton, UploadDropzone } from "@/app/utils/uploadthing";
require("moment/locale/id");

export default function Form({ data }: { data: any }) {
  const [Loading, setLoading] = useState(false);
  const [BtnText, setBtnText] = useState("Update Project");
  const [ImageFile, setImageFile] = useState(data.img);
  const [Project] = useState(data);
  const { toast } = useToast();
  const { id } = useParams();

  let route = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      setBtnText("Saving");
      const target: any = e.target;
      const title = target?.title.value;
      const desc = target?.desc.value;
      const img = ImageFile;

      await axios.put("/projects/" + id, {
        title,
        desc,
        img: img,
        date: data.date,
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
    <>
      <h1 className="text-xl   font-bold mb-5">Edit Project</h1>
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

            <div className="block relative rounded-sm overflow-hidden ">
              <UploadDropzone
                className="w-full  h-80"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImageFile(res[0].url);
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
              {ImageFile && (
                <Image
                  objectFit="cover"
                  src={ImageFile}
                  className="rounded-sm"
                  alt="preview image"
                  fill
                />
              )}
            </div>
            <UploadButton
              className=" mt-2"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImageFile(res[0].url);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <div className="col-span-3">
            <div className="form-group mb-2">
              <label htmlFor="" className="text-sm inline-block mb-2">
                Title
              </label>
              <Input
                defaultValue={Project?.title}
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
                defaultValue={Project?.desc}
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
    </>
  );
}
