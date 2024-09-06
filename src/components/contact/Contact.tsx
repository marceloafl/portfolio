import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="flex justify-between items-center gap-3 pr-4">
      <a href="mailto:marceloaflemes@gmail.com">marceloaflemes@gmail.com</a>
      <a href="https://github.com/marceloafl" target="_blank">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/marceloafl/" target="_blank">
        <LinkedInIcon />
      </a>
    </div>
  );
}
