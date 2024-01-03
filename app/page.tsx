import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import CardProject from "./components/card-project/front/CardProject";
import FrontWrapper from "./components/layout/FrontWrapper";
import { axios } from "@/helpers/Axios";

export const metadata: Metadata = {
  title: "Cakra Portofolio",
  description: "Website portofolio by cakra",
};

const fetchData = async () => {
  let data = await axios("/projects");
  return data?.data || [];
};

export default async function Home() {
  let projects = await fetchData();
  return (
    <FrontWrapper>
      <section className="flex container justify-center flex-col items-center min-h-[80vh]">
        <h1 className="text-7xl font-bold mb-4 year-text absolute md:block hidden left-16 top-[50%] translate-y-[-50%]">
          2023
        </h1>
        <h1 className="text-5xl font-bold mb-4 hover:scale-[1.03] transition-all duration-300">
          Cakra Portofolio
        </h1>
        <p className="text-sm mb-3 text-center">
          Website ini dibuat menggunakan next js dan node js sebagai framework
          untuk membantu pengembangan website
        </p>
        <div className="flex gap-2">
          <Button variant={"default"}>Explore Project</Button>
          <a href="https://github.com/muhammadnorkholit">
            {" "}
            <Button variant={"outline"}>
              <i className="fa-brands fa-github mr-2"></i> github
            </Button>
          </a>
        </div>
      </section>

      <section className="container mb-10">
        <h1 className="text-xl mb-4 font-medium">My Project</h1>
        <div className="grid gap-5 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {projects.map((project: any, i: number) => {
            return (
              <CardProject
                key={i}
                date={project.date}
                img={project?.img}
                title={project.title}
                desc={project.desc}
              />
            );
          })}
        </div>
        <Button variant={"default"} className="mt-4 group">
          Lainnya{" "}
          <i className="ml-2 fa fa-arrow-right group-hover:translate-x-2 transition-all duration-300" />
        </Button>
      </section>
    </FrontWrapper>
  );
}
