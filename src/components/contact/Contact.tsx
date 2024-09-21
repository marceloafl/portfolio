import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface ContactProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export default function Contact({
  email,
  githubUrl,
  linkedinUrl,
}: ContactProps) {
  return (
    <div className="flex justify-between items-center gap-3 pr-4">
      <a href="mailto:marceloaflemes@gmail.com">{email}</a>
      <a href={githubUrl} target="_blank">
        <GitHubIcon />
      </a>
      <a href={linkedinUrl} target="_blank">
        <LinkedInIcon />
      </a>
    </div>
  );
}
