import Contact from "@/components/contact/Contact";

interface FooterProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export default function Footer({ email, githubUrl, linkedinUrl }: FooterProps) {
  return (
    <footer className="flex justify-end mt-16">
      <Contact email={email} githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
    </footer>
  );
}
