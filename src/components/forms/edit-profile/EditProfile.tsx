"use client";

import { IProfile } from "@/types/profiles";

interface EditProfileProps {
  profile: IProfile;
}

export default function EditProfile({ profile }: EditProfileProps) {
  return (
    <form className="">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            required
            className="h-12 p-2 border border-dark-gray rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            required
            className="h-12 p-2 border border-dark-gray rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="githubUrl">GitHub URL:</label>
          <input
            type="url"
            id="githubUrl"
            name="githubUrl"
            value={profile.githubUrl}
            className="h-12 p-2 border border-dark-gray rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="linkedinUrl">LinkedIn URL:</label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            value={profile.linkedinUrl}
            className="h-12 p-2 border border-dark-gray rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={profile.title}
            className="h-12 p-2 border border-dark-gray rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subtitle">Subtitle:</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={profile.subtitle}
            className="h-12 p-2 border border-dark-gray rounded"
          />
        </div>

        <div></div>
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
