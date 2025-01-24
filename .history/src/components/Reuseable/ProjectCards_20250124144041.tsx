// import React from "react";

// const ProjectCard = ({ name, description, image }) => {
//   return (
//     <div className="border p-4 rounded-lg shadow-md text-center recent-projects-cards">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-40 object-cover mb-4 rounded-lg"
//       />
//       <h3 className="text-xl font-bold mb-2 text-blue-700">{name}</h3>
//       <p className="text-grey-500">{description}</p>
//     </div>
//   );
// };

// export default ProjectCard;


interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, image }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md text-center recent-projects-cards">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2 text-blue-700">{name}</h3>
      <p className="text-grey-500">{description}</p>
    </div>
  );
};