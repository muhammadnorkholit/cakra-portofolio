"use client";

import React, { useState } from "react";
import BackWrapper from "../components/layout/backWrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Loader from "../components/Loader";
import { axios } from "@/helpers/Axios";
import { Textarea } from "@/components/ui/textarea";

export default function Form({ data }: { data: any }) {
  let route = useRouter();
  const [Loading, setLoading] = useState(false);
  const [BtnText, setBtnText] = useState("Update");

  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      setBtnText("saving");
      let target = e.target;
      const title = target.titleHero.value;
      const desc = target.descHero.value;

      if (data) {
        await axios.put("/settings/" + data.id, {
          title,
          desc,
        });
      } else {
        await axios.post("/settings/", {
          title,
          desc,
        });
      }
      setBtnText("Update");

      route.refresh();
      setLoading(false);
      toast({
        className: "bg-emerald-500 text-white  ",
        title: "Notification ",
        description: "Successfully update setting",
      });
    } catch (error) {
      toast({
        className: "bg-rose-500 text-white  ",
        title: "Notification ",
        description: "Failed update  settingsetting",
      });
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2  flex-row justify-between"></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="md:grid-cols-2 grid  grid-cols-1 gap-2">
            <div className="form-group  mb-2 ">
              <label
                className="text-sm text-slate-600 mb-1 inline-block"
                htmlFor="logo"
              >
                Logo
              </label>
              <Input
                className="focus-visible:ring-0"
                type="text"
                name="logo"
                id="logo"
                placeholder="Logo Website"
                defaultValue={data?.title}
              />
            </div>
            <div className="form-group  mb-2 ">
              <label
                className="text-sm text-slate-600 mb-1 inline-block"
                htmlFor="titleHero"
              >
                Title Hero Section
              </label>
              <Input
                className="focus-visible:ring-0"
                type="text"
                name="titleHero"
                id="titleHero"
                placeholder="Title hero section"
                defaultValue={data?.title}
              />
            </div>
            <div className="form-group  mb-2 ">
              <label
                className="text-sm text-slate-600 mb-1 inline-block"
                htmlFor="descHero"
              >
                Desc Hero Section
              </label>
              <Textarea id="descHero" name="descHero">
                {data?.desc}
              </Textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={Loading}>
              {BtnText} {Loading && <Loader />}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
