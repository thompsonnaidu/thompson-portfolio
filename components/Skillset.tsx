import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/Card";
import { skillsInfo } from "@/data";
const Badge = ({ title }: { title: String }) => {
  return (
    <span
      className={`rounded-md bg-body text-xs text-primary p-2 border hover:cursor-pointer hover:border-blue-500/60`}
    >
      {title}
    </span>
  );
};
const BadgeList = ({ items }: { items: String[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <Badge key={i} title={item} />
      ))}
    </div>
  );
};

const Skillset = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <h1 className="heading text-transform: capitalize">
        Skills I Bring <span className="text-purple"> on table</span>
      </h1>

      <div className="grid  gap-2 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-10">
        {skillsInfo.map((skill, i) => {
          return (
            <Card key={skill.title}>
              <CardTitle>{skill.title}</CardTitle>
              <div className="mt-2">
                <BadgeList items={skill.names} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skillset;
