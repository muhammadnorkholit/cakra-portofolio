"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { axios } from "@/helpers/Axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Delete({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  const { toast } = useToast();
  let route = useRouter();
  const handleDelete = async () => {
    try {
      await axios.delete("/projects/" + id);
      toast({
        className: "bg-emerald-500 text-white  ",
        title: "Notification ",
        description: "Successfully delete  project",
      });
      route.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Notification ",
        description: "Failed delete  project",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-rose-500 text-white hover:bg-rose-400"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
