"use client";
import Image from "next/image";
import Nav from "./Components/nav";
import HomePage from "./Components/HomePage";
import AddProject from "./Components/AddProject";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [projectAddState, setAddProjectState] = useState<object>({
    selectedProject: undefined,
    projects: [],
  });

  let content: any;

  const handleAddProject = () => {
    content = setAddProjectState((prev: object): any => {
      return { ...prev, selectedProject: null };
    });
  };

  return (
    <main className="flex">
      <Nav newProject={handleAddProject} />
      {content}
    </main>
  );
};
