import { IProject, Stack, stacks } from "@/types/profiles";
import React, { useState } from "react";

interface ProjectsInputProps {
  projects: IProject[];
  onProjectsChange: (newProjects: IProject[]) => void;
}

export default function ProjectsInput({
  projects,
  onProjectsChange,
}: ProjectsInputProps) {
  const [projectName, setProjectName] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectStack, setProjectStack] = useState<Stack | "">("");

  const addProject = () => {
    if (projectName && projectUrl && projectStack) {
      onProjectsChange([
        ...projects,
        { name: projectName, url: projectUrl, stack: projectStack },
      ]);
      setProjectName("");
      setProjectUrl("");
      setProjectStack("");
    }
  };

  const removeProject = (index: number) => {
    onProjectsChange(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col">
      <label>Projects:</label>
      <div className="flex flex-col mb-2">
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="h-12 p-2 border border-dark-gray rounded mb-2"
        />
        <input
          type="url"
          placeholder="Project URL"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
          className="h-12 p-2 border border-dark-gray rounded mb-2"
        />
        <select
          value={projectStack}
          onChange={(e) => setProjectStack(e.target.value as Stack)}
          className="h-12 p-2 border border-dark-gray rounded mb-2"
        >
          <option value="">Select Stack</option>
          {stacks.map((stack) => (
            <option key={stack} value={stack}>
              {stack}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={addProject}
          className="h-12 bg-dark-gray text-white rounded"
        >
          Add Project
        </button>
      </div>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>
              {project.name} - {project.url} - {project.stack}
            </span>
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
