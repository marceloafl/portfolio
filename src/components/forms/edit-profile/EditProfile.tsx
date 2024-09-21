"use client";

import EditProfileInput from "@/components/input/edit-profile/EditProfileInput";
import ProjectsInput from "@/components/input/project-input/ProjectInput";
import SkillsInput from "@/components/input/skills-input/SkillsInput";
import { IProfile, IProject } from "@/types/profiles";
import { useEffect, useState } from "react";
import updateOneProfile from "@/actions/profile/updateProfile";

interface EditProfileProps {
  profile: IProfile;
}

export default function EditProfile({ profile }: EditProfileProps) {
  const profileId = "66ef1bc3a0ea4ad8631d2930";
  const [currentProfile, setCurrentProfile] = useState<IProfile>(profile);

  const handleSkillsChange = (newSkills: string[]) => {
    setCurrentProfile({ ...currentProfile, skills: newSkills });
  };

  const handleProjectsChange = (newProjects: IProject[]) => {
    setCurrentProfile({ ...currentProfile, projects: newProjects });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateOneProfile(profileId, currentProfile);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
        <EditProfileInput
          label="Email"
          id="email"
          type="text"
          value={currentProfile.email}
          onChange={(value) =>
            setCurrentProfile({ ...currentProfile, email: value })
          }
        />

        <EditProfileInput
          label="Name"
          id="name"
          type="text"
          value={currentProfile.name}
          required
          onChange={(value) =>
            setCurrentProfile({ ...currentProfile, name: value })
          }
        />

        <EditProfileInput
          label="GitHub URL"
          id="githubUrl"
          type="url"
          value={currentProfile.githubUrl}
          onChange={(value) =>
            setCurrentProfile({ ...currentProfile, githubUrl: value })
          }
        />

        <EditProfileInput
          label="LinkedIn URL"
          id="linkedinUrl"
          type="url"
          value={currentProfile.linkedinUrl}
          onChange={(value) =>
            setCurrentProfile({ ...currentProfile, linkedinUrl: value })
          }
        />

        <EditProfileInput
          label="Title"
          id="title"
          type="text"
          value={currentProfile.title}
          onChange={(value) =>
            setCurrentProfile({ ...currentProfile, title: value })
          }
        />

        <EditProfileInput
          label="Subtitle"
          id="subtitle"
          type="text"
          value={currentProfile.subtitle}
          onChange={(value) =>
            setCurrentProfile({ ...currentProfile, subtitle: value })
          }
        />

        <SkillsInput
          skills={currentProfile.skills}
          onSkillsChange={handleSkillsChange}
        />

        <ProjectsInput
          projects={currentProfile.projects}
          onProjectsChange={handleProjectsChange}
        />

        <button
          type="submit"
          className="h-12 bg-dark-gray text-white rounded w-full col-span-2"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
}
