import React from "react";
import Card from "../../components/ui/Card";

function ProjectsPage() {
  const projects = [
    {
      title: "Project 1 is the first title",
      description:
        "Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint et consectetur, pariatur architecto dolore obcaecati dolorem sed assumenda voluptates porro ab qui odit sequi ducimus eveniet totam harum officiis nostrum.",
      live: "live",
      code: "code",
      tags: ["hola", "chau"],
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["hola", "chau"],
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["hola", "chau"],
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["hola", "chau"],
    },
  ];

  return (
    <>
      <div className="justify-center mx-10 my-10">
        <section className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Card content={project} />
          ))}
        </section>
      </div>
    </>
  );
}

export default ProjectsPage;
