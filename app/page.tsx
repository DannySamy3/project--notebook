'use client';
import Image from 'next/image';
import Nav from './Components/nav';
import HomePage from './Components/HomePage';
import AddProject from './Components/AddProject';
import React, { useState } from 'react';

/////////////////////////////////////////////
/*
DEFINING SOME INTERFACES
*/
//////////////////////////////////////////////

interface pageProps {
  newproject: {
    handleStartProject: () => object;
  };
}
interface ProjectState {
  selectedProject: object | null | undefined;
  projects: any[];
}

////////////////////////////////////////
/*
THE MAIN APP COMPONENT FUNCTION
*/
////////////////////////////////////////////////

const page: React.FC<pageProps> = () => {
  const [projectAddState, setAddProjectState] = useState<ProjectState>({
    selectedProject: undefined,
    projects: [],
  });

  let content: any;

  const handleStartProject = () => {
    content = setAddProjectState((prev) => {
      return { ...prev, selectedProject: null };
    });
  };

  const addProject = (projectData) => {
    setAddProjectState((prev) => {
      const newProject = { ...projectData, id: Math.random() };

      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  const handleCancel = () => {
    setAddProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
      };
    });
  };

  if (projectAddState.selectedProject === null) {
    content = <AddProject saveHandler={addProject} onCancel={handleCancel} />;
  } else if (projectAddState.selectedProject === undefined) {
    content = <HomePage newproject={handleStartProject} />;
  }

  return (
    <main className='flex'>
      <Nav
        newproject={handleStartProject}
        projects={projectAddState.projects}
      />
      {content}
      {console.log(projectAddState)}
    </main>
  );
};

export default page;
