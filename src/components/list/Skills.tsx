const skills: string[] = [
  "Javascript",
  "Typescript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Storybook",
  "SEO",
  "HTML",
  "CSS",
  "Tailwind",
  "Styled-components",
  "Module CSS",
  "Bootstrap",
  "Material-UI",
  "Node.js",
  "Express",
  "C#",
  ".NET",
  "API Rest",
  "Git",
  "Vitest",
  "Jest",
  "React Testing Library",
  "AWS",
  "Azure",
  "SQL",
  "Google Analytics",
  "Mendix",
];

export default function Skills() {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-xs p-3 border-b border-[#e5e7eb]">Skills</p>
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
