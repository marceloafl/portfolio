interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-xs p-3 border-b border-gray">Skills</p>
      <li className="flex gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <ul key={index} className="text-sm sm:text-base">
            {skill}
          </ul>
        ))}
      </li>
    </section>
  );
}
