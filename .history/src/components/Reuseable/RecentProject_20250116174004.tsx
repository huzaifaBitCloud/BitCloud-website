import React from "react";
import ProjectCard from "./ProjectCards";

const RecentProjects = () => {
  const projects = [
    {
      name: "Project Alpha",
      description: "A responsive, high-performance e-commerce website for a fashion brand.",
      image: "/images/mobile-app.jpg",
    },
    {
      name: "Beta CMS",
      description: "A custom CMS built for a publishing company to manage and publish content effortlessly.",
      image: "/images/contact-image.jpeg",
    },
    {
      name: "Gamma Web App",
      description: "A progressive web app for a tech startup, designed with user experience and performance in mind.",
      image: "/images/gamma-app.png",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
        Our Recent Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
