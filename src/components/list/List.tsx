import { IProject } from "@/types/profiles";

interface ProjectListProps {
  projects: IProject[];
}

export default function List({ projects }: ProjectListProps) {
  return (
    <li className="list-none pb-12">
      <ul className="flex justify-between text-xs p-3">
        <p>Project</p>
        <div className="w-20">
          <p className="mr-10">Stack</p>
        </div>
      </ul>
      {projects.map((p) => (
        <ul
          key={p.url}
          className="border-t border-gray p-3 flex justify-between"
        >
          <a href={p.url} target="_blank">
            <p className="font-medium">{p.name}</p>
          </a>
          <div className="w-20">
            <p>{p.stack}</p>
          </div>
        </ul>
      ))}
    </li>
  );
}
