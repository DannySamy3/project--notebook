"use client";
import Image from "next/image";
import Nav from "./Components/nav";
import HomePage from "./Components/HomePage";
import AddProject from "./Components/AddProject";
import React, { useState } from "react";
import SelectedProject from "./Components/SelectedProjected";

/////////////////////////////////////////////
/*
DEFINING SOME INTERFACES
*/
//////////////////////////////////////////////

interface pageProps {
  handleAddTask: (task: string) => void;
  selectedProjectId: number;
}
interface ProjectState {
  selectedProject: object | null | undefined;
  projects: any[];
  tasks: any[];
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
    tasks: [],
  });

  const selectedProject = projectAddState.projects.find(
    (project) => project.id === projectAddState.selectedProject
  );

  const deleteProject = () => {
    setAddProjectState((prev) => {
      return {
        ...prev,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProject
        ),
        selectedProject: undefined,
      };
    });
  };

  const addTask = (text: string) => {
    setAddProjectState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProject,
        id: taskId,
      };

      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  };

  const deleteTasks = (id: number) => {
    setAddProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    });
  };

  let content: any = (
    <SelectedProject
      project={selectedProject}
      handleDelete={deleteProject}
      handleAddTask={addTask}
      handleDeleteTask={deleteTasks}
      tasks={projectAddState.tasks}
    />
  );

  const handleStartProject = () => {
    content = setAddProjectState((prev) => {
      return { ...prev, selectedProject: null };
    });
  };

  const addProject = (projectData: object) => {
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

  const handleSelect = (id: number) => {
    setAddProjectState((prev) => {
      return {
        ...prev,
        selectedProject: id,
      };
    });
  };

  if (projectAddState.selectedProject === null) {
    content = <AddProject saveHandler={addProject} onCancel={handleCancel} />;
  } else if (projectAddState.selectedProject === undefined) {
    content = <HomePage newproject={handleStartProject} />;
  }

  return (
    <main className="flex">
      <Nav
        newproject={handleStartProject}
        projects={projectAddState.projects}
        selectProject={handleSelect}
        selectedProjectId={projectAddState.selectedProject}
      />
      {content}
    </main>
  );
};

export default page;
