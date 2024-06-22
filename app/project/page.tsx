"use client";

import { contactInfo, navItems } from "@/data";
import { Button } from "@/components/ui/MovingBorders";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Skillset from "@/components/Skillset";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { workExperience } from "@/data/index";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const BadgeList = ({ items }: { items: String[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((title, i) => (
        <span
          key={i}
          className={`rounded-md bg-body text-xs text-primary p-2 border hover:cursor-pointer hover:border-blue-500/60 my-2`}
        >
          {title}
        </span>
      ))}
    </div>
  );
};
const ProjectPage = () => {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero mainTitle="4+ Years of Expertise in Building Robust Software Solutions!" />

          <div className="flex flex-wrap items-center justify-center p-4 gap-16 my-10">
            {projects.map((item, id) => (
              <div key={id} className="columns-2 hover:cursor-pointer">
                <img src={item.img} />
                <div>
                  <p className="text-3xl text-purple"> {item.title}</p>
                  <p className="text-lg my-2">{item.des}</p>
                  <p className="text-md text-gray">Technologies Used :</p>
                  <BadgeList items={["Graphql", "React JS", "Node JS"]} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default ProjectPage;
