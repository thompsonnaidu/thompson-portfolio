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
const ExperiencePage = () => {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero mainTitle="4+ Years of Expertise in Building Robust Software Solutions!" />

          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {workExperience.map((exp) => (
                <Card
                  key={exp.id}
                  className="my-2 flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  <div className="flex lg:flex-row flex-col lg:items-start p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <Link href={exp.companyURL}>
                      <img
                        src={exp.thumbnail}
                        alt={exp.thumbnail}
                        className="lg:w-50 md:w-30 w-30"
                      />
                    </Link>
                    <div className="lg:ms-5">
                      <h1 className="text-2xl font-bold text-white-100">
                        {exp.title}
                      </h1>
                      <h3 className="text-start text-gray mt-2 ">
                        {exp.location}
                      </h3>
                      <h3 className="text-start text-gray mt-2 ">
                        {exp.duration}
                      </h3>
                      <p className="text-white-100 mt-3 font-semibold">
                        {exp.desc}
                      </p>
                      <div className="my-2">
                        <h5 className="text-start font-semibold">
                          Responsibilites/Achivements
                        </h5>
                        <ol className="list-disc">
                          {exp.details.map((detail, index) => {
                            return (
                              <li
                                key={index}
                                className="text-white-100 p-1"
                                dangerouslySetInnerHTML={{ __html: detail }}
                              ></li>
                            );
                          })}
                        </ol>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Skillset className="my-6" />
          </TracingBeam>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default ExperiencePage;
