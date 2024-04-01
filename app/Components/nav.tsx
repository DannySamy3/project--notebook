import React from "react";
import Button from "./Button";

interface NavProps {
  newproject: {
    handleAddProject: () => object;
  };
  isHomePage: boolean;
  projects: Project[];
  selectProject: any;
  selectedProjectId: number;
}

interface Project {
  id: string;
  title: string;
}

const nav: React.FC<NavProps> = ({
  newproject,
  projects,
  selectProject,
  selectedProjectId,
}) => {
  return (
    <section className="navbar-start mt-12 bg-neutral py-8 rounded-r-lg rounded-br-md h-screen w-1/5 space-y-5
    ">
      <h2 className=" font-bold text-2xl mb-3 text-gray-300  mt-6 text-left">
        YOUR PROJECTS
      </h2>
      <Button isHomePage={false} addproject={newproject}>
        +Add Project
      </Button>
      <ul className="my-8">
        {projects.map((project) => {
          let btnStyle =
            "w-full text-justify text-lg px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:font-bold hover:bg-slate-600";

          if (project.id === selectedProjectId)
            btnStyle += " bg-gray-950 text-gray-200";
          else btnStyle += " text-gray-400";

          return (
            <li key={project.id}>
              <button
                className={btnStyle}
                onClick={() => selectProject(project.id)}
              >
                {project.title.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default nav;
