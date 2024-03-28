'use client';
import Image from 'next/image';
import Nav from './Components/nav';
import HomePage from './Components/HomePage';
import AddProject from './Components/AddProject';
import React, { useState } from 'react';

interface pageProps {
  newproject: {
    handleAddProject: () => object;
  };
}

interface ProjectState {
  selectedProject: object | null | undefined;
  projects: any[];
}

const page: React.FC<pageProps> = () => {
  const [projectAddState, setAddProjectState] = useState<ProjectState>({
    selectedProject: undefined,
    projects: [],
  });

  let content: any;

  const handleAddProject = () => {
    content = setAddProjectState((prev) => {
      return { ...prev, selectedProject: null };
    });
  };
  if (projectAddState.selectedProject === null) {
    content = <AddProject />;
  } else if (projectAddState.selectedProject === undefined) {
    content = <HomePage newproject={handleAddProject} />;
  }
  return (
    <main className='flex'>
      <Nav newproject={handleAddProject} />
      {content}
    </main>
  );
};

export default page;
