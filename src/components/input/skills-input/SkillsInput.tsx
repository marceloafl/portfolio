import React, { useState } from "react";

interface SkillsInputProps {
  skills: string[];
  onSkillsChange: (newSkills: string[]) => void;
}

export default function SkillsInput({
  skills,
  onSkillsChange,
}: SkillsInputProps) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill && !skills.includes(skill)) {
      onSkillsChange([...skills, skill]);
      setSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onSkillsChange(skills.filter((s) => s !== skillToRemove));
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="skills">Skills:</label>
      <div className="flex justify-between">
        <input
          type="text"
          id="skills"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="h-12 p-2 border border-dark-gray rounded w-full"
        />
        <button
          type="button"
          onClick={addSkill}
          className="ml-2 h-12 w-16 bg-dark-gray text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="mt-2">
        {skills.map((s, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{s}</span>
            <button
              type="button"
              onClick={() => removeSkill(s)}
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
