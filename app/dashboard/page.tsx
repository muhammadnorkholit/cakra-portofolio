// "use client";
// import React, { useEffect, useState } from "react";
// import BackWrapper from "../components/layout/backWrapper";
// import { Button } from "@/components/ui/button";
// import CardProject from "../components/card-project/back/CardProject";
// import Image from "next/image";
// import Link from "next/link";
// import { axios } from "@/helpers/Axios";
// import { useToast } from "@/components/ui/use-toast";
// // import { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Cakra Portofolio - Dashboard",
// //   description: "Website portofolio by cakra",
// // };
// export default function Dashboard() {
//   let gridChoose = window.localStorage.getItem("grid-option") || 1;
//   const [Grid, setGrid] = useState(gridChoose);
//   const [Projects, setProjects] = useState([]);
//   const [Loading, setLoading] = useState(true);
//   const { toast } = useToast();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       let data = await axios.get("/projects?_sort=id&_order=desc");
//       setProjects(data.data);
//       setLoading(false);
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Notification ",
//         description: "Terjadi kesalahan dengan server",
//       });
//     }
//   };

//   const hadleGrid = (choose: number) => {
//     setGrid(choose);
//     window.localStorage.setItem("grid-option", choose + "");
//   };
//   return (
//     <BackWrapper>
//       <div className="flex justify-between">
//         <h3>{Projects.length} Projects</h3>
//         <div className="flex gap-2">
//           <Button
//             className="hidden md:inline-block"
//             onClick={() => hadleGrid(0)}
//             variant={Grid == 0 ? "secondary" : "ghost"}
//           >
//             <i className="fa-solid fa-grip"></i>{" "}
//           </Button>
//           <Button
//             className="hidden md:inline-block"
//             onClick={() => hadleGrid(1)}
//             variant={Grid == 1 ? "secondary" : "ghost"}
//           >
//             <i className="fa-solid fa-grip-vertical"></i>
//           </Button>
//           <Link href={"/new-project"}>
//             <Button variant={"default"} className="mb-5">
//               <i className="fa fa-plus mr-2"></i> New Project
//             </Button>
//           </Link>
//         </div>
//       </div>
//       <div
//         className={`${
//           Projects.length == 0
//             ? "flex items-center justify-center"
//             : `grid  ${
//                 Grid == 0 ? "grid-cols-1" : "md:grid-cols-2 grid-cols-1"
//               } gap-5`
//         }`}
//       >
//         {Projects.length == 0 && !Loading && (
//           <div className="text-center ">
//             <Image
//               src={"/images/empty-data.jpg"}
//               width={400}
//               height={400}
//               alt="empty image"
//             />
//             <h3 className="text-slate-600"> No projects created</h3>{" "}
//             <p className="text-slate-600">
//               let's start adding the first project{" "}
//             </p>
//             <Link href={"/new-project"}>
//               <Button variant={"outline"} className="mt-3">
//                 <i className="fa fa-plus mr-2"></i> Create New Project
//               </Button>
//             </Link>
//           </div>
//         )}
//         {Projects?.map((d: any, i: number) => {
//           return (
//             <CardProject
//               id={d.id}
//               key={i}
//               date={"senin"}
//               title={d?.title}
//               desc={d?.desc}
//             />
//           );
//         })}
//       </div>
//     </BackWrapper>
//   );
// }
import React from "react";
import BackWrapper from "../components/layout/backWrapper";
import { axios } from "@/helpers/Axios";
import CardProject from "../components/card-project/back/CardProject";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "./Header";

const fetchData = async () => {
  let data = await axios("/projects");
  return data.data;
};
export default async function Dashboard({ searchParams }: any) {
  let Projects = await fetchData();
  let Grid = searchParams?.grid || "horizontal";

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
        {Projects?.map((d: any, i: number) => {
          return (
            <CardProject
              id={d.id}
              key={i}
              date={"senin"}
              title={d?.title}
              desc={d?.desc}
            />
          );
        })}
      </div>
    </BackWrapper>
  );
}
