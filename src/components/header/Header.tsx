import ThemeButton from "@/components/button/theme-button/ThemeButton";
import Contact from "@/components/contact/Contact";

interface HeaderProps {
  name: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export default function Header({
  name,
  email,
  githubUrl,
  linkedinUrl,
}: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row justify-between">
      <h1 className="text-lg font-semibold">{name}</h1>
      <div className="flex">
        <Contact
          email={email}
          githubUrl={githubUrl}
          linkedinUrl={linkedinUrl}
        />
        <ThemeButton />
      </div>
    </header>
  );
}
