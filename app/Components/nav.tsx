import React from 'react';
import Button from './Button';

interface NavProps {
  newproject: {
    handleAddProject: () => object;
  };
  isHomePage: boolean;
  projects: Project[];
}

interface Project {
  id: string;
  title: string;
}

const nav: React.FC<NavProps> = ({ newproject, projects }) => {
  return (
    <section className='navbar-start mt-12 bg-neutral py-8 rounded-r-lg rounded-br-md h-screen w-1/5 space-y-5 bg-gray-700'>
      <h2 className='mx-2 font-bold text-2xl mb-3 text-gray-300 text-3xl mt-6 text-left'>
        YOUR PROJECTS
      </h2>
      <Button isHomePage={false} addproject={newproject}>
        +Add Project
      </Button>
      <ul className='my-8'>
        {projects.map((project) => (
          <li key={project.id}>
            <button className='w-full text-justify text-lg px-2 py-1 rounded-sm my-1 text-gray-400 hover:text-stone-200 hover:font-bold hover:bg-slate-600'>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default nav;
